// src/data/mineralSalts.ts

import Calcio from '../assets/sais-minerais/btn-sais/calcio.png';
import Cloro from '../assets/sais-minerais/btn-sais/cloro.png';
import Cromo from '../assets/sais-minerais/btn-sais/cromo.png';
import Enxofre from '../assets/sais-minerais/btn-sais/enxofre.png';
import Ferro from '../assets/sais-minerais/btn-sais/ferro.png';
import Fluor from '../assets/sais-minerais/btn-sais/fluor.png';
import Fosforo from '../assets/sais-minerais/btn-sais/fosforo.png';
import Iodo from '../assets/sais-minerais/btn-sais/iodo.png';
import Magnesio from '../assets/sais-minerais/btn-sais/magnesio.png';
import Manganes from '../assets/sais-minerais/btn-sais/manganes.png';
import Potassio from '../assets/sais-minerais/btn-sais/potassio.png';
import Selenio from '../assets/sais-minerais/btn-sais/selenio.png';
import Sodio from '../assets/sais-minerais/btn-sais/sodio.png';
import Zinco from '../assets/sais-minerais/btn-sais/zinco.png';

import type { MineralSalt } from '../types/mineralSalt';

export const mineralSaltsData: MineralSalt[] = [
  { id: 1, name: 'CÁLCIO (CA)', ribbonClass: 'ribbon-1', img: Calcio },
  { id: 2, name: 'CLORO (CL)', ribbonClass: 'ribbon-2', img: Cloro },
  { id: 3, name: 'CROMO (CR)', ribbonClass: 'ribbon-3', img: Cromo },
  { id: 4, name: 'ENXOFRE (S)', ribbonClass: 'ribbon-4', img: Enxofre },
  { id: 5, name: 'FERRO (FE)', ribbonClass: 'ribbon-5', img: Ferro },
  { id: 6, name: 'FLÚOR (F)', ribbonClass: 'ribbon-6', img: Fluor },
  { id: 7, name: 'FÓSFORO (P)', ribbonClass: 'ribbon-7', img: Fosforo },
  { id: 8, name: 'IODO (I)', ribbonClass: 'ribbon-8', img: Iodo },
  { id: 9, name: 'MAGNÉSIO (MG)', ribbonClass: 'ribbon-9', img: Magnesio },
  { id: 10, name: 'MANGANÊS (MN)', ribbonClass: 'ribbon-10', img: Manganes },
  { id: 11, name: 'POTÁSSIO (K)', ribbonClass: 'ribbon-11', img: Potassio },
  { id: 12, name: 'SELÊNIO (SE)', ribbonClass: 'ribbon-12', img: Selenio },
  { id: 13, name: 'SÓDIO (NA)', ribbonClass: 'ribbon-13', img: Sodio },
  { id: 14, name: 'ZINCO (ZN)', ribbonClass: 'ribbon-14', img: Zinco },
];
