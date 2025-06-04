// src/types/aminoAcid.ts

export interface AminoAcid {
  name: string;
  img: string;
  ribbonClass: string;
}

export interface AminoAcidsData {
  essential: AminoAcid[];
  nonEssential: AminoAcid[];
}
