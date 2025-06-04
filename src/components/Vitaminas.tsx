// src/components/Vitaminas.tsx

import { Link } from 'react-router-dom';

import { vitaminData } from '../data/vitamins';
import type { Vitamin } from '../types/vitamin';

const Vitaminas: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 font-sans">
      <h1 className="text-4xl pt-12 font-bold text-center">Vitaminas</h1>
      <hr className="w-1/2 border-t-2 border-gray-300 mx-auto my-5" />
      <h2 className="text-center text-xl font-semibold mb-8 max-w-3xl mx-auto">
        Nutrição: O Alicerce Fundamental para a Saúde Integral
      </h2>

      <div className="bg-white rounded-lg shadow-md p-5 mt-5 text-gray-800 leading-relaxed text-base md:text-lg">
        <p>
          As vitaminas desempenham um papel crucial no complexo sistema biológico humano...
        </p>
        <p>
          Além de serem essenciais para funções metabólicas, as vitaminas têm impacto direto...
        </p>
        <p>
          Uma dieta equilibrada, rica em uma variedade de alimentos, é crucial para garantir...
        </p>
      </div>

      <hr className="border-t border-gray-300 mb-10" />

      {/* HIDROSSOLÚVEIS */}
      <h2 className="text-2xl font-bold text-center text-blue-900 uppercase mb-6">HIDROSSOLÚVEIS</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-12">
        {vitaminData.waterSoluble.map((vitamin: Vitamin, idx) => (
          <Link
            key={idx}
            to={`/vitaminas/${vitamin.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="block"
          >
            <div className="relative bg-gray-100 border border-gray-300 rounded-xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div
                className={`${vitamin.ribbon} absolute top-[-6px] left-3 w-16 h-2 rounded-md`}
              ></div>
              <h2 className="text-lg font-bold text-gray-700 uppercase mt-4">{vitamin.name}</h2>
              <div className="mt-4 mx-auto w-[100px] h-[100px] relative">
                <img
                  src={vitamin.img}
                  alt={vitamin.name.toLowerCase()}
                  className="w-full h-full object-contain"
                  loading={idx < 3 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* LIPOSSOLÚVEIS */}
      <h2 className="text-2xl font-bold text-center text-blue-900 uppercase mb-6">LIPOSSOLÚVEIS</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {vitaminData.fatSoluble.map((vitamin: Vitamin, idx) => (
          <Link
            key={idx}
            to={`/vitaminas/${vitamin.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="block"
          >
            <div className="relative bg-gray-100 border border-gray-300 rounded-xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div
                className={`${vitamin.ribbon} absolute top-[-6px] left-3 w-16 h-2 rounded-md`}
              ></div>
              <h2 className="text-lg font-bold text-gray-700 uppercase mt-4">{vitamin.name}</h2>
              <div className="mt-4 mx-auto w-[100px] h-[100px] relative">
                <img
                  src={vitamin.img}
                  alt={vitamin.name.toLowerCase()}
                  className="w-full h-full object-contain"
                  loading={idx < 3 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Vitaminas;
