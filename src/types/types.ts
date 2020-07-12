export interface FormFields {
  appearance: AppearanceFields | null;
  aroma: AromaFields | null;
  taste: TasteFields | null;
  conclusion: ConclusionFields | null;
}

export interface AppearanceFields {
  clarity: string[] | null;
  brightness: string[] | null;
  tone: string[] | null;
  shades: string[] | null;
  viscosity: string[] | null;
  appearanceImpression: string[] | null;
}

export interface AromaFields {
  firstImpression: string[] | null;
  fruit: string[] | null;
  flower: string[] | null;
  spice: string[] | null;
  aromaImpression: string[] | null;
}

export interface TasteFields {
  attack: string[] | null;
  sweetness: string[] | null;
  acidity: string[] | null;
  tannin: string[] | null;
  balance: string[] | null;
  alcohol: string[] | null;
  aftertaste: string[] | null;
}

export interface ConclusionFields {
  evaluation: string[] | null;
  temperature: string[] | null;
  glass: string[] | null;
  decantage: string[] | null;
  vintage: string[] | null;
  country: string[] | null;
  grape: string[] | null;
}