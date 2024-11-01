export interface ITrait {
  name: string;
  description: string;
  level: number;
  items: ITraitItem[];
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
  inscriptions: IInscriptionMapTraitItems[][];
}

export interface IInscriptionMapTraitItems extends ITraitItem {
  maxCount: number;
}
export interface IInscriptionMapPayload extends Omit<ITrait, "items"> {
  items: IInscriptionMapTraitItems[];
}
