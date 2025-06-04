// src/data/heroContents.ts

import type { HeroContent } from '../types/hero';
import ImageVita from '../assets/carousel/vita-carousel.png';
import ImageSais from '../assets/carousel/sais-carousel.png';
import ImageAmin from '../assets/carousel/amin-carousel.png';

export const heroContents: HeroContent[] = [
  {
    title: 'Vitaminas',
    description: 'Essenciais para o funcionamento saudável do corpo',
    link: '/sobre',
    image: ImageVita,
  },
  {
    title: 'Sais Minerais',
    description: 'Nutrientes vitais para o equilíbrio do organismo',
    link: '/sobre',
    image: ImageSais,
  },
  {
    title: 'Aminoácidos',
    description: 'Os blocos de construção das proteínas',
    link: '/sobre',
    image: ImageAmin,
  },
];
