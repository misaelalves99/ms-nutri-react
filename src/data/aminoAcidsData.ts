// src/data/aminoAcidsData.ts

import type { AminoAcidsData } from '../types/aminoAcid';

import Leucina from '../assets/aminoacidos/btn-amin/essenciais/leucina.png';
import Alanina from '../assets/aminoacidos/btn-amin/nao-essenciais/alanina.png';

export const aminoAcidsData: AminoAcidsData = {
  essential: [
    { name: "Leucina", img: Leucina, ribbonClass: "ribbon-blue" },
    // outros...
  ],
  nonEssential: [
    { name: "Alanina", img: Alanina, ribbonClass: "ribbon-green" },
    // outros...
  ],
};
