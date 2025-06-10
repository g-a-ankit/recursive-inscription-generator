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
import * as _ from "lodash";
import { whalesTraits } from "./traits/whalesoncats";

const main = async () => {
  try {
    const whalesConfig: IRecursiveInscriptionConfig = {
      name: "whales-child-cat721",
      totalInscriptionsToGenerate: 10000,
      destinationFolder: "output/whales-child-cat721",
      traits: whalesTraits,
      generationMethod: "CARTESIAN",
      imageSrcUrl: "https://tracker.catprotocol.org/api/collections/",
    };
    await recursvieInscriptionGenerator(whalesConfig);
  } catch (err) {
    console.error(err);
  }
};

main();

// const paths = listHtmlFiles("output/whales-child-cat721-cartesian");
// console.log(paths.length);
// captureHTMLAsImage(
//   "whales-on-cat",
//   paths,
//   "output/screencapture/whales-on-cat"
// );
