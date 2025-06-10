import {
  IInscriptionMap,
  IInscriptionMapPayload,
  ICat721TraitItems,
  IRecursiveInscriptionConfig,
} from "../common/interfaces";
import { getCartesianProduct } from "../common/utility";
import fs from "fs";
import path from "path";
import * as _ from "lodash";

export const recursvieInscriptionGenerator = async (
  config: IRecursiveInscriptionConfig
) => {
  try {
    config = {
      ...config,
      destinationFolder: `${config.destinationFolder}-${_.toLower(
        config.generationMethod
      )}`,
    };

    if (_.isEmpty(config.traits)) {
      throw new Error("No traits provided");
    }

    if (_.isEmpty(config.destinationFolder)) {
      throw new Error("No destination folder provided");
    }

    if (config.totalInscriptionsToGenerate <= 0) {
      throw new Error("No inscriptions to generate");
    }
    console.log("Generating inscriptions...");

    const isDestinationFolderExists = fs.existsSync(config.destinationFolder);

    if (!isDestinationFolderExists) {
      console.log("Creating destination folder...");
      fs.mkdirSync(config.destinationFolder);
    } else {
      console.log("Destination folder already exists...");
    }

    const orderedTraits = _.chain(config.traits).sortBy("level").valueOf();

    const inscriptionMapPayload: IInscriptionMapPayload[] = [];

    for (const trait of orderedTraits) {
      const items = _.chain(trait.items)
        .map((item) => {
          let maxCount = 0;
          if (item.mode === "PERCENTAGE") {
            maxCount = Math.floor(
              (config.totalInscriptionsToGenerate * item.value) / 100
            );
          } else {
            maxCount = item.value;
          }
          return {
            ...item,
            maxCount,
          };
        })
        .filter((item) => item.maxCount > 0)
        .valueOf();

      inscriptionMapPayload.push({
        ...trait,
        items,
      });
    }

    const inscriptionMap = await generateInscriptionMap(
      config,
      inscriptionMapPayload
    );

    const m = _.map(inscriptionMap.inscriptions, (ins) => {
      return ins.map((i) => i.name);
    });

    fs.writeFileSync(
      path.join("temp", `${config.name}.json`),
      JSON.stringify(m),
      "utf-8"
    );

    console.log("Inscription map generated...");

    const tags = await generateHTMLTags(inscriptionMap, config.name);
    console.log("HTML tags generated...");

    await replaceTemplateWithTagsAndSave(config, tags);

    console.log("Inscriptions generated successfully...");
  } catch (err) {
    console.error(err);
  }
};

export const generateInscriptionMapByCartesian = async (
  config: IRecursiveInscriptionConfig,
  traits: IInscriptionMapPayload[]
): Promise<IInscriptionMap> => {
  try {
    const itemsArray = _.map(traits, (trait) => {
      return trait.items;
    });

    const cartesianProduct = await getCartesianProduct(itemsArray);

    return {
      totalItems: cartesianProduct.length,
      inscriptions: cartesianProduct,
    };
  } catch (err) {
    console.error(err);
    return { totalItems: 0, inscriptions: [] };
  }
};

export const generateInscriptionMapByRandom = async (
  config: IRecursiveInscriptionConfig,
  traits: IInscriptionMapPayload[]
): Promise<IInscriptionMap> => {
  try {
    const MAX_ITERATIONS = 10_000;
    const totalItems = config.totalInscriptionsToGenerate;
    let traitCountMap: Record<string, number> = {};
    let totalInscriptionsGenerated = 0;
    const uniqueInscriptions = new Map<string, ICat721TraitItems[]>([]);
    let totalUniqueInscriptions = 0;
    let totalSwaps = 0;
    let totalFailedSwaps = 0;

    const updateUniqueInscriptions = (
      inscriptionString: string,
      inscription: ICat721TraitItems[]
    ) => {
      const _temp = _.cloneDeep(traitCountMap);
      let abort = false;
      totalUniqueInscriptions++;
      _.forEach(inscription, (i) => {
        if (!_temp[i.name]) {
          _temp[i.name] = 0;
        }

        if (_temp[i.name] < (i?.maxCount || 0)) {
          _temp[i.name]++;
        } else {
          abort = true;
        }
      });

      if (!abort) {
        traitCountMap = _.cloneDeep(_temp);
        uniqueInscriptions.set(inscriptionString, inscription);
      }
    };

    while (uniqueInscriptions.size < totalItems) {
      const inscription: ICat721TraitItems[] = [];
      // - iterate over all traits
      // - for each trait, select a random item that hasn't been selected more than maxCount times
      // - add the item to the inscription
      for (const trait of traits) {
        const items = _.chain(trait.items)
          .filter((item) => {
            return (
              !traitCountMap[item.name] ||
              traitCountMap[item.name] < (item.maxCount || 0)
            );
          })
          .valueOf();

        if (_.isEmpty(items)) {
          continue;
        }

        const randomIndex = Math.floor(Math.random() * items.length);
        const chosenItem = items[randomIndex];

        if (!traitCountMap[chosenItem.name]) {
          traitCountMap[chosenItem.name] = 0;
        }

        if (traitCountMap[chosenItem.name] < (chosenItem.maxCount || 0)) {
          // traitCountMap[chosenItem.name]++;
          inscription.push(chosenItem);
        }
      }

      // - check if the inscription is unique
      const inscriptionString = inscription.map((i) => i.name).join("_");
      const isInscriptionUnique = !uniqueInscriptions.has(inscriptionString);
      totalInscriptionsGenerated++;

      if (isInscriptionUnique) {
        // - if unique, add it to the map
        updateUniqueInscriptions(inscriptionString, inscription);
      } else {
        // - if not unique, try to swap items to generate a unique inscription
        if (totalInscriptionsGenerated > MAX_ITERATIONS) {
          // - if too many duplicates, abort generation
          console.warn("Too many duplicates, stopping generation.");
          break;
        }

        let totalLocalSwaps = 0;

        // - variable to check if swapped happened or not
        let stopSwapping = false;

        // - try till all items in map are itirated
        while (totalLocalSwaps < uniqueInscriptions.size - 1) {
          totalLocalSwaps++;

          // - pass cloned map and cloned current inscription(generated by random choose) to swap function
          const isSwapped = swapInscriptionWithoutDuplicate(
            _.cloneDeep(uniqueInscriptions),
            _.cloneDeep(inscription)
          );

          if (isSwapped.state) {
            totalSwaps++;

            _.forEach(isSwapped.ins, (ins) => {
              updateUniqueInscriptions(ins.inscriptionString, ins.items);
            });

            stopSwapping = true;
            break;
          } else {
            totalFailedSwaps++;
          }
        }

        if (!stopSwapping) {
          console.log(
            "Failed to swap, adding duplicate item",
            totalInscriptionsGenerated
          );
          break;
        }
        // break;
      }
    }

    console.log(
      "unique items = ",
      totalUniqueInscriptions,
      "; total swaps = ",
      totalSwaps,
      "; total failed swaps = ",
      totalFailedSwaps,
      " map size = ",
      " set keys=",
      new Set(uniqueInscriptions.keys()).size,
      " set values=",
      new Set(
        Array.from(uniqueInscriptions.values()).map((item) => {
          return item.map((i) => i.name);
        })
      ).size,
      " map size=",
      uniqueInscriptions.size,
      " traitCountMap=",
      traitCountMap
    );

    fs.writeFileSync(
      "traits-keys.json",
      JSON.stringify(Array.from(uniqueInscriptions.keys())),
      "utf-8"
    );

    fs.writeFileSync(
      "traits-values.json",
      JSON.stringify(
        Array.from(uniqueInscriptions.values()).map((item) => {
          return item.map((i) => i.name);
        })
      ),
      "utf-8"
    );

    await saveTraits(config, Array.from(uniqueInscriptions.values()));

    return {
      totalItems: uniqueInscriptions.size,
      inscriptions: Array.from(uniqueInscriptions.values()),
    };
  } catch (err) {
    console.error(err);
    return { totalItems: 0, inscriptions: [] };
  }
};

export const generateHTMLTags = async (
  data: IInscriptionMap,
  title: string
): Promise<string[][]> => {
  try {
    const allInscriptionsAsTags: string[][] = [];

    const imgTag = `<img src="{IMG_PATH}" alt="{ALT}" />`;

    for (const inscription of data.inscriptions) {
      const tags: string[] = [];
      for (const item of inscription) {
        const tag = imgTag
          .replace(
            "{IMG_PATH}",
            `${item.collectionId}/localId/${item.localId}/content`
          )
          .replace("{ALT}", item.name);
        tags.push(tag);
      }
      allInscriptionsAsTags.push(tags);
    }

    return allInscriptionsAsTags;
  } catch (err) {
    console.error(err);

    return [];
  }
};

export const replaceTemplateWithTagsAndSave = async (
  config: IRecursiveInscriptionConfig,
  data: string[][]
) => {
  try {
    const minifiedTemplate = fs.readFileSync(
      path.join(__dirname, "../../templates/minified.html"),
      "utf8"
    );

    const prefilledTemplate = minifiedTemplate
      .replace("{IMAGE_SOURCE_URL}", config.imageSrcUrl)
      .replace("{TITLE}", _.capitalize(config.name));

    for (const [index, tags] of data.entries()) {
      let template = prefilledTemplate;
      const combinesTags = tags.join("");
      template = template.replace("{PLACE_YOUR_CONTENT_HERE}", combinesTags);

      // console.log(
      //   "file gen = ",
      //   path.join(config.destinationFolder, `${config.name}-${index}.html`)
      // );

      fs.writeFileSync(
        path.join(config.destinationFolder, `${config.name}-${index}.html`),
        template,
        "utf-8"
      );
    }
  } catch (err) {
    console.log("err =", err);
  }
};

export const generateInscriptionMap = async (
  config: IRecursiveInscriptionConfig,
  traits: IInscriptionMapPayload[]
) => {
  switch (config.generationMethod) {
    case "CARTESIAN":
      console.log("Generating inscriptions by cartesian...");
      return await generateInscriptionMapByCartesian(config, traits);
    case "RANDOM":
      console.log("Generating inscriptions by random...");
      return await generateInscriptionMapByRandom(config, traits);
    default:
      console.log("Generating inscriptions by random...");
      return await generateInscriptionMapByRandom(config, traits);
  }
};

export const swapInscriptionWithoutDuplicate = (
  uniqueItems: Map<string, ICat721TraitItems[]>,
  inscriptions: ICat721TraitItems[]
): {
  state: boolean;
  ins: { inscriptionString: string; items: ICat721TraitItems[] }[];
} => {
  try {
    // - start from 0th index and iterate till last index to check if swapping is possible and it will create unique inscription
    // - the function will select a random key from the map and try to swap the items with the current inscription
    // - it checks if 0th index is swapped will it create a unique inscription if yes then return the swapped inscriptions else move to next index
    // - if all indexes are checked and no unique inscription is created then return
    let indexToSwap = 0;
    const maxIndex = inscriptions.length - 1;

    const keysArray = Array.from(uniqueItems.keys());

    const randomIndex = Math.floor(Math.random() * keysArray.length);

    const randomKey = keysArray[randomIndex];

    const nextInscriptionItem = uniqueItems.get(randomKey)!;

    const newInscriptions: {
      inscriptionString: string;
      items: ICat721TraitItems[];
    }[] = [];

    while (indexToSwap < maxIndex) {
      const temp = inscriptions[indexToSwap];
      inscriptions[indexToSwap] = nextInscriptionItem[indexToSwap];
      nextInscriptionItem[indexToSwap] = temp;

      const newInscriptionString = nextInscriptionItem
        .map((i) => i.name)
        .join("_");
      const oldInscriptionString = inscriptions.map((i) => i.name).join("_");

      const isNewInscriptionUnique = !uniqueItems.has(newInscriptionString);
      const isOldInscriptionUnique = !uniqueItems.has(oldInscriptionString);

      if (isNewInscriptionUnique) {
        newInscriptions.push({
          inscriptionString: newInscriptionString,
          items: nextInscriptionItem,
        });
      }

      if (isOldInscriptionUnique) {
        newInscriptions.push({
          inscriptionString: oldInscriptionString,
          items: inscriptions,
        });
      }

      if (!_.isEmpty(newInscriptions)) {
        return { state: true, ins: newInscriptions };
      } else {
        indexToSwap++;
      }
    }

    return {
      state: false,
      ins: [],
    };
  } catch (err) {
    console.log(err);
    return {
      state: false,
      ins: [],
    };
  }
};

export const saveTraits = async (
  config: IRecursiveInscriptionConfig,
  uniqueInscriptions: ICat721TraitItems[][]
) => {
  try {
    const traitString = uniqueInscriptions.map((ins, index) => {
      const str = ins.map((i) => i.name).join("_");
      return str;
      // return { serialNo: index, traitString: str };
    });

    fs.writeFileSync(
      path.join(`${config.name}-traits-string.json`),
      JSON.stringify(traitString),
      "utf-8"
    );

    // fs.writeFileSync(
    //   path.join(`${config.name}-traits.json`),
    //   JSON.stringify(
    //     Object.values(uniqueInscriptions).map((ins) => ins.map((i) => i.name))
    //   ),
    //   "utf-8"
    // );
  } catch (err) {
    console.log(err);
  }
};
