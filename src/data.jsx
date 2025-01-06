// Vitaminas
import Vitaminab1 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b1.png';
import Vitaminab2 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b2.png';
import Vitaminab3 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b3.png';
import Vitaminab5 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b5.png';
import Vitaminab7 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b7.png';
import Vitaminab9 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b9.png';
import Vitaminab12 from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-b12.png';
import Vitaminabc from './assets/vitaminas/btn-vita/hidrossoluveis/vitamina-c.png';

import Vitaminaa from './assets/vitaminas/btn-vita/lipossoluveis/vitamina-a.png';
import Vitaminad from './assets/vitaminas/btn-vita/lipossoluveis/vitamina-d.png';
import Vitaminae from './assets/vitaminas/btn-vita/lipossoluveis/vitamina-e.png';
import Vitaminak from './assets/vitaminas/btn-vita/lipossoluveis/vitamina-k.png';

// Sais Minerais
import Calcio from './assets/sais-minerais/btn-sais/calcio.png';
import Cloro from './assets/sais-minerais/btn-sais/cloro.png';
import Cromo from './assets/sais-minerais/btn-sais/cromo.png';
import Enxofre from './assets/sais-minerais/btn-sais/enxofre.png';
import Ferro from './assets/sais-minerais/btn-sais/ferro.png';
import Fluor from './assets/sais-minerais/btn-sais/fluor.png';
import Fosforo from './assets/sais-minerais/btn-sais/fosforo.png';
import Iodo from './assets/sais-minerais/btn-sais/iodo.png';
import Magnesio from './assets/sais-minerais/btn-sais/magnesio.png';
import Manganes from './assets/sais-minerais/btn-sais/manganes.png';
import Potassio from './assets/sais-minerais/btn-sais/potassio.png';
import Selenio from './assets/sais-minerais/btn-sais/selenio.png';
import Sodio from './assets/sais-minerais/btn-sais/sodio.png';
import Zinco from './assets/sais-minerais/btn-sais/zinco.png';

// Aminoácidos - Essenciais
import Fenilalanina from './assets/aminoacidos/btn-amin/essenciais/fenilalanina.png';
import Histidina from './assets/aminoacidos/btn-amin/essenciais/histidina.png';
import Isoleucina from './assets/aminoacidos/btn-amin/essenciais/isoleucina.png';
import Leucina from './assets/aminoacidos/btn-amin/essenciais/leucina.png';
import Lisina from './assets/aminoacidos/btn-amin/essenciais/lisina.png';
import Metionina from './assets/aminoacidos/btn-amin/essenciais/metionina.png';
import Treonina from './assets/aminoacidos/btn-amin/essenciais/treonina.png';
import Triptofano from './assets/aminoacidos/btn-amin/essenciais/triptofano.png';
import Valina from './assets/aminoacidos/btn-amin/essenciais/valina.png';

// Aminoácidos - Não-Essenciais
import Alanina from './assets/aminoacidos/btn-amin/nao-essenciais/alanina.png';
import Arginina from './assets/aminoacidos/btn-amin/nao-essenciais/arginina.png';
import Aspargina from './assets/aminoacidos/btn-amin/nao-essenciais/aspargina.png';
import Aspartato from './assets/aminoacidos/btn-amin/nao-essenciais/aspartato.png';
import Cisteina from './assets/aminoacidos/btn-amin/nao-essenciais/cisteina.png';
import Glicina from './assets/aminoacidos/btn-amin/nao-essenciais/glicina.png';
import Glutamato from './assets/aminoacidos/btn-amin/nao-essenciais/glutamato.png';
import Glutamina from './assets/aminoacidos/btn-amin/nao-essenciais/glutamina.png';
import Prolina from './assets/aminoacidos/btn-amin/nao-essenciais/prolina.png';
import Serina from './assets/aminoacidos/btn-amin/nao-essenciais/serina.png';
import Tirosina from './assets/aminoacidos/btn-amin/nao-essenciais/tirosina.png';

export const vitaminData = {
    waterSoluble: [
        { 
            name: "VITAMINA B1", 
            img: Vitaminab1, 
            ribbon: "ribbon-1" 
        },

        { 
            name: "VITAMINA B2", 
            img: Vitaminab2, 
            ribbon: "ribbon-2" 
        },
        
        { 
            name: "VITAMINA B3", 
            img: Vitaminab3, 
            ribbon: "ribbon-3" 
        },

        { 
            name: "VITAMINA B5", 
            img: Vitaminab5, 
            ribbon: "ribbon-4" 
        },

        { 
            name: "VITAMINA B7", 
            img: Vitaminab7, 
            ribbon: "ribbon-5" 
        },

        { 
            name: "VITAMINA B9", 
            img: Vitaminab9, 
            ribbon: "ribbon-6" 
        },

        { 
            name: "VITAMINA B12", 
            img: Vitaminab12, 
            ribbon: "ribbon-7" 
        },

        { 
            name: "VITAMINA C", 
            img: Vitaminabc, 
            ribbon: "ribbon-8" 
        },
    ],

    fatSoluble: [
        { 
            name: "VITAMINA A", 
            img: Vitaminaa,
            ribbon: "ribbon-1" 
        },

        { 
            name: "VITAMINA D", 
            img: Vitaminad, 
            ribbon: "ribbon-2" 
        },

        { 
            name: "VITAMINA E", 
            img: Vitaminae,
            ribbon: "ribbon-3" 
        },

        { 
            name: "VITAMINA K", 
            img: Vitaminak,
            ribbon: "ribbon-4" 
        },
    ],
};

// Sais Minerais
export const mineralSaltsData = [
    { 
        id: 1, 
        name: "CÁLCIO (CA)", 
        ribbonClass: "ribbon-1", 
        img: Calcio,
    },

    { 
        id: 2, name: "CLORO (CL)", 
        ribbonClass: "ribbon-2", 
        img: Cloro,
    },

    { 
        id: 3, 
        name: "CROMO (CR)", 
        ribbonClass: "ribbon-3", 
        img: Cromo,
    },

    { 
        id: 4, 
        name: "ENXOFRE (S)", 
        ribbonClass: "ribbon-4", 
        img: Enxofre,
    },

    { 
        id: 5, 
        name: "FERRO (FE)", 
        ribbonClass: "ribbon-5", 
        img: Ferro,
    },

    { 
        id: 6, 
        name: "FLÚOR (F)", 
        ribbonClass: "ribbon-6", 
        img: Fluor,
    },

    { 
        id: 7, 
        name: "FÓSFORO (P)", 
        ribbonClass: "ribbon-7", 
        img: Fosforo,
    },

    { 
        id: 8, 
        name: "IODO (I)", 
        ribbonClass: "ribbon-8", 
        img: Iodo,
    },

    { 
        id: 9, 
        name: "MAGNÉSIO (MG)", 
        ribbonClass: "ribbon-8", 
        img: Magnesio,
    },

    { 
        id: 10, 
        name: "MANGANÊS (MN)", 
        ribbonClass: "ribbon-8", 
        img: Manganes,
    },

    { 
        id: 11, 
        name: "POTÁSSIO (K)", 
        ribbonClass: "ribbon-8", 
        img: Potassio,
    },

    { 
        id: 12, 
        name: "SELÊNIO (SE)", 
        ribbonClass: "ribbon-8", 
        img: Selenio,
    },

    { 
        id: 13, 
        name: "SÓDIO (NA)", 
        ribbonClass: "ribbon-8", 
        img: Sodio,
    },

    { 
        id: 14, 
        name: "ZINCO (ZN)", 
        ribbonClass: "ribbon-8", 
        img: Zinco,
    },
];

// Aminoácidos
export const aminoAcidsData = {
    essential: [
        { 
            name: "FENILALANINA", 
            ribbonClass: "ribbon-1", 
            img: Fenilalanina
        },

        { 
            name: "HISTIDINA", 
            ribbonClass: "ribbon-2", 
            img: Histidina
        },

        { 
            name: "ISOLEUCINA", 
            ribbonClass: "ribbon-3", 
            img: Isoleucina
        },

        { 
            name: "LEUCINA", 
            ribbonClass: "ribbon-4", 
            img: Leucina 
        },

        { 
            name: "LISINA", 
            ribbonClass: "ribbon-5", 
            img: Lisina
        },

        { 
            name: "METIONINA", 
            ribbonClass: "ribbon-6", 
            img: Metionina
        },

        { 
            name: "TREONINA", 
            ribbonClass: "ribbon-7", 
            img: Treonina
        },

        { 
            name: "TRIPTOFANO", 
            ribbonClass: "ribbon-8", 
            img: Triptofano
        },

        { 
            name: "VALINA", 
            ribbonClass: "ribbon-8", 
            img: Valina
        },
    ],
    nonEssential: [
        { 
            name: "ALANINA", 
            ribbonClass: "ribbon-1", 
            img: Alanina
        },

        { 
            name: "ARGININA", 
            ribbonClass: "ribbon-2", 
            img: Arginina
        },

        { 
            name: "ASPARGINA", 
            ribbonClass: "ribbon-3", 
            img: Aspargina
        },

        { 
            name: "ASPARTATO", 
            ribbonClass: "ribbon-4", 
            img: Aspartato
        },

        { 
            name: "CISTEÍNA", 
            ribbonClass: "ribbon-4", 
            img: Cisteina 
        },

        { 
            name: "GLICINA", 
            ribbonClass: "ribbon-4", 
            img: Glicina
        },

        { 
            name: "GLUTAMATO", 
            ribbonClass: "ribbon-4", 
            img: Glutamato
        },

        { 
            name: "GLUTAMINA", 
            ribbonClass: "ribbon-4", 
            img: Glutamina
        },

        { 
            name: "PROLINA", 
            ribbonClass: "ribbon-4", 
            img: Prolina
        },

        { 
            name: "SERINA", 
            ribbonClass: "ribbon-4", 
            img: Serina
        },

        { 
            name: "TIROSINA", 
            ribbonClass: "ribbon-4", 
            img: Tirosina
        },
    ],
};
