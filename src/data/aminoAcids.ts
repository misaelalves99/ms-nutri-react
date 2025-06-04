// src/data/aminoAcids.ts

import type { AminoAcid } from '../types/aminoAcid';

import Fenilalanina from '../assets/aminoacidos/btn-amin/essenciais/fenilalanina.png';
import Histidina from '../assets/aminoacidos/btn-amin/essenciais/histidina.png';
import Isoleucina from '../assets/aminoacidos/btn-amin/essenciais/isoleucina.png';
import Leucina from '../assets/aminoacidos/btn-amin/essenciais/leucina.png';
import Lisina from '../assets/aminoacidos/btn-amin/essenciais/lisina.png';
import Metionina from '../assets/aminoacidos/btn-amin/essenciais/metionina.png';
import Treonina from '../assets/aminoacidos/btn-amin/essenciais/treonina.png';
import Triptofano from '../assets/aminoacidos/btn-amin/essenciais/triptofano.png';
import Valina from '../assets/aminoacidos/btn-amin/essenciais/valina.png';

import Alanina from '../assets/aminoacidos/btn-amin/nao-essenciais/alanina.png';
import Arginina from '../assets/aminoacidos/btn-amin/nao-essenciais/arginina.png';
import Aspargina from '../assets/aminoacidos/btn-amin/nao-essenciais/aspargina.png';
import Aspartato from '../assets/aminoacidos/btn-amin/nao-essenciais/aspartato.png';
import Cisteina from '../assets/aminoacidos/btn-amin/nao-essenciais/cisteina.png';
import Glicina from '../assets/aminoacidos/btn-amin/nao-essenciais/glicina.png';
import Glutamato from '../assets/aminoacidos/btn-amin/nao-essenciais/glutamato.png';
import Glutamina from '../assets/aminoacidos/btn-amin/nao-essenciais/glutamina.png';
import Prolina from '../assets/aminoacidos/btn-amin/nao-essenciais/prolina.png';
import Serina from '../assets/aminoacidos/btn-amin/nao-essenciais/serina.png';
import Tirosina from '../assets/aminoacidos/btn-amin/nao-essenciais/tirosina.png';

export const aminoAcidsData: {
  essential: AminoAcid[];
  nonEssential: AminoAcid[];
} = {
  essential: [
    { name: 'FENILALANINA', ribbonClass: 'ribbon-1', img: Fenilalanina },
    { name: 'HISTIDINA', ribbonClass: 'ribbon-2', img: Histidina },
    { name: 'ISOLEUCINA', ribbonClass: 'ribbon-3', img: Isoleucina },
    { name: 'LEUCINA', ribbonClass: 'ribbon-4', img: Leucina },
    { name: 'LISINA', ribbonClass: 'ribbon-5', img: Lisina },
    { name: 'METIONINA', ribbonClass: 'ribbon-6', img: Metionina },
    { name: 'TREONINA', ribbonClass: 'ribbon-7', img: Treonina },
    { name: 'TRIPTOFANO', ribbonClass: 'ribbon-8', img: Triptofano },
    { name: 'VALINA', ribbonClass: 'ribbon-9', img: Valina },
  ],

  nonEssential: [
    { name: 'ALANINA', ribbonClass: 'ribbon-1', img: Alanina },
    { name: 'ARGININA', ribbonClass: 'ribbon-2', img: Arginina },
    { name: 'ASPARAGINA', ribbonClass: 'ribbon-3', img: Aspargina },
    { name: 'ASPARTATO', ribbonClass: 'ribbon-4', img: Aspartato },
    { name: 'CISTEÍNA', ribbonClass: 'ribbon-5', img: Cisteina },
    { name: 'GLICINA', ribbonClass: 'ribbon-6', img: Glicina },
    { name: 'GLUTAMATO', ribbonClass: 'ribbon-7', img: Glutamato },
    { name: 'GLUTAMINA', ribbonClass: 'ribbon-8', img: Glutamina },
    { name: 'PROLINA', ribbonClass: 'ribbon-9', img: Prolina },
    { name: 'SERINA', ribbonClass: 'ribbon-10', img: Serina },
    { name: 'TIROSINA', ribbonClass: 'ribbon-11', img: Tirosina },
  ],
};
