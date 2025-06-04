// src/data/vitamins.ts

import Vitaminab1 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b1.png';
import Vitaminab2 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b2.png';
import Vitaminab3 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b3.png';
import Vitaminab5 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b5.png';
import Vitaminab7 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b7.png';
import Vitaminab9 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b9.png';
import Vitaminab12 from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b12.png';
import Vitaminabc from '../assets/vitaminas/btn-vita/hidrossoluveis/vitamina-c.png';

import Vitaminaa from '../assets/vitaminas/btn-vita/lipossoluveis/vitamina-a.png';
import Vitaminad from '../assets/vitaminas/btn-vita/lipossoluveis/vitamina-d.png';
import Vitaminae from '../assets/vitaminas/btn-vita/lipossoluveis/vitamina-e.png';
import Vitaminak from '../assets/vitaminas/btn-vita/lipossoluveis/vitamina-k.png';

import type { Vitamin } from '../types/vitamin';

export const vitaminData: {
  waterSoluble: Vitamin[];
  fatSoluble: Vitamin[];
} = {
  waterSoluble: [
    { name: 'VITAMINA B1', img: Vitaminab1, ribbon: 'ribbon-1' },
    { name: 'VITAMINA B2', img: Vitaminab2, ribbon: 'ribbon-2' },
    { name: 'VITAMINA B3', img: Vitaminab3, ribbon: 'ribbon-3' },
    { name: 'VITAMINA B5', img: Vitaminab5, ribbon: 'ribbon-4' },
    { name: 'VITAMINA B7', img: Vitaminab7, ribbon: 'ribbon-5' },
    { name: 'VITAMINA B9', img: Vitaminab9, ribbon: 'ribbon-6' },
    { name: 'VITAMINA B12', img: Vitaminab12, ribbon: 'ribbon-7' },
    { name: 'VITAMINA C', img: Vitaminabc, ribbon: 'ribbon-8' },
  ],

  fatSoluble: [
    { name: 'VITAMINA A', img: Vitaminaa, ribbon: 'ribbon-1' },
    { name: 'VITAMINA D', img: Vitaminad, ribbon: 'ribbon-2' },
    { name: 'VITAMINA E', img: Vitaminae, ribbon: 'ribbon-3' },
    { name: 'VITAMINA K', img: Vitaminak, ribbon: 'ribbon-4' },
  ],
};
