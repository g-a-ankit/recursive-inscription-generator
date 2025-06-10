export interface ITrait {
  name: string;
  description: string;
  level: number;
  items: ICat721TraitItems[];
}

export interface ICat721TraitItems extends Omit<ITraitItem, "inscriptionId"> {
  collectionId: string;
  localId: string;
  maxCount?: number;
}

export interface ICat721Trait extends Omit<ITrait, "items"> {
  items: ICat721TraitItems[];
}

export interface ITraitItem {
  name: string;
  description: string;
  inscriptionId: string;
  mode: "PERCENTAGE" | "COUNT";
  value: number;
}

export interface IRecursiveInscriptionConfig {
  name: string;
  totalInscriptionsToGenerate: number;
  destinationFolder: string;
  imageSrcUrl: string;
  generationMethod: "CARTESIAN" | "RANDOM";
  traits: ITrait[];
}

export interface IInscriptionMap {
  totalItems: number;
  inscriptions: ICat721TraitItems[][];
}

export interface IInscriptionMapTraitItems extends ITraitItem {
  maxCount: number;
}
export interface IInscriptionMapPayload extends Omit<ITrait, "items"> {
  items: ICat721TraitItems[];
}
