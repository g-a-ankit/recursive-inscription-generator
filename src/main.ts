import {
  IInscriptionMapTraitItems,
  IRecursiveInscriptionConfig,
} from "./common/interfaces";
import { listHtmlFiles } from "./common/utility";
import {
  generateHTMLTags,
  recursvieInscriptionGenerator,
  replaceTemplateWithTagsAndSave,
} from "./generator/recursvieInscriptionGenerator";
import { captureHTMLAsImage } from "./screencapture/screencapture";
import {
  dogfaceDaoTraits,
  dogfaceDaoTraitsEqualDistribution,
} from "./traits/dogfaceDao";
import * as _ from "lodash";

const main = async () => {
  try {
    const dogFaceDaoConfig: IRecursiveInscriptionConfig = {
      name: "dog-face-dao-cat721",
      totalInscriptionsToGenerate: 10000,
      destinationFolder: "output/dog-face-dao-cat721",
      traits: dogfaceDaoTraitsEqualDistribution,
      generationMethod: "RANDOM",
      imageSrcUrl: "https://ordinals.fractalbitcoin.io",
    };
    await recursvieInscriptionGenerator(dogFaceDaoConfig);
  } catch (err) {
    console.error(err);
  }
};

main();

