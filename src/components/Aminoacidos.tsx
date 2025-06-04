// src/components/Aminoacidos.tsx

import React from 'react';
import { aminoAcidsData } from '../data/aminoAcids';
import type { AminoAcid } from '../types/aminoAcid';

const ribbonColors: { [key: string]: string } = {
  'ribbon-1': 'bg-green-500',
  'ribbon-2': 'bg-blue-500',
  'ribbon-3': 'bg-yellow-500',
  'ribbon-4': 'bg-red-500',
  'ribbon-5': 'bg-purple-600',
  'ribbon-6': 'bg-orange-700',
  'ribbon-7': 'bg-teal-600',
  'ribbon-8': 'bg-rose-700',
};

const Aminoacidos: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 font-sans">
      <h1 className="text-4xl md:text-3xl sm:text-2xl text-center font-bold text-gray-800 mt-6">
        Aminoácidos
      </h1>
      <hr className="w-1/2 border-t-2 border-gray-300 mx-auto my-4" />
      <h2 className="text-xl md:text-lg text-center text-gray-700 font-medium">
        Nutrição: O Alicerce Fundamental para a Saúde Integral
      </h2>

      <div className="max-w-4xl mx-auto my-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 leading-relaxed text-[1.1rem] sm:text-[1rem]">
          <p className="italic mb-4">
            As vitaminas desempenham um papel crucial no complexo sistema biológico humano, oferecendo uma gama de benefícios essenciais para o corpo...
          </p>
          <p>
            Além de serem essenciais para funções metabólicas, as vitaminas têm impacto direto na saúde de órgãos específicos...
            <br /><br />
            Uma dieta equilibrada, rica em uma variedade de alimentos, é crucial para garantir a ingestão adequada de vitaminas...
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4">
        {/* Aminoácidos Essenciais */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 uppercase mb-4">
            Aminoácidos Essenciais
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {aminoAcidsData.essential.map((amino: AminoAcid) => (
              <a href="#" key={amino.name}>
                <div className="bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md p-4 text-center relative hover:shadow-lg hover:-translate-y-2 transition-all">
                  <div
                    className={`w-16 h-2 rounded absolute -top-2 left-2 ${ribbonColors[amino.ribbonClass] || 'bg-green-500'}`}
                  />
                  <h3 className="text-lg font-bold text-gray-700 uppercase mt-2 mb-3">
                    {amino.name}
                  </h3>
                  <img
                    src={amino.img}
                    alt={amino.name}
                    width={100}
                    height={100}
                    className="mx-auto rounded"
                    style={{ maxWidth: '80px', height: 'auto' }}
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Aminoácidos Não Essenciais */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 uppercase mb-4">
            Aminoácidos Não Essenciais
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {aminoAcidsData.nonEssential.map((amino: AminoAcid) => (
              <a href="#" key={amino.name}>
                <div className="bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md p-4 text-center relative hover:shadow-lg hover:-translate-y-2 transition-all">
                  <div
                    className={`w-16 h-2 rounded absolute -top-2 left-2 ${ribbonColors[amino.ribbonClass] || 'bg-green-500'}`}
                  />
                  <h3 className="text-lg font-bold text-gray-700 uppercase mt-2 mb-3">
                    {amino.name}
                  </h3>
                  <img
                    src={amino.img}
                    alt={amino.name}
                    width={100}
                    height={100}
                    className="mx-auto rounded"
                    style={{ maxWidth: '80px', height: 'auto' }}
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aminoacidos;
