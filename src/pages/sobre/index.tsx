// src/pages/sobre/index.tsx

import type { FC } from 'react';

const Sobre: FC = () => {
  return (
    <section className="font-sans p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl text-center text-gray-800 mb-5">Sobre</h1>
      <hr className="h-1 bg-gradient-to-r from-green-400 to-green-200 border-0 w-3/5 mx-auto my-5" />

      <h2 className="w-11/12 md:w-1/2 mx-auto text-center text-gray-900 font-bold text-2xl md:text-3xl mb-8">
        Nutrição: O Alicerce Fundamental para a Saúde Integral
      </h2>

      <div className="container mx-auto flex flex-col items-center gap-6">
        <p className="w-11/12 md:w-3/5 text-red-600 text-lg leading-relaxed text-justify md:text-xl">
          &quot;Atenção: as informações neste site são de caráter informativo e não substituem orientações profissionais.&quot;
        </p>

        <p className="w-11/12 md:w-3/5 text-gray-600 text-lg leading-relaxed text-justify md:text-xl mb-3">
          A nutrição é um pilar essencial para a saúde e bem-estar, desempenhando um papel central no funcionamento harmonioso do corpo humano. Vai além de simplesmente ingerir alimentos; refere-se à ingestão balanceada de nutrientes que fornecem energia, suportam o crescimento, revitalizam os tecidos e sustentam uma variedade de funções fisiológicas.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
