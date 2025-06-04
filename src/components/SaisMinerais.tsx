// src/components/SaisMinerais.tsx

import { mineralSaltsData } from '../data/mineralSalts';

const SaisMinerais: React.FC = () => {
  return (
    <section className="max-w-[1000px] mx-auto p-5 flex flex-col gap-10 font-sans">
      <h1 className="text-4xl font-bold text-center mt-8 text-gray-800">Sais Minerais</h1>
      <hr className="w-1/2 border-t-2 border-gray-300 mx-auto my-5" />
      <h2 className="text-center text-xl md:text-2xl">
        Nutrição: O Alicerce Fundamental para a Saúde Integral
      </h2>

      <div className="bg-white rounded-lg shadow-md p-5 mt-5 text-gray-800 leading-relaxed text-base md:text-lg">
        <p className="mb-5 italic">
          As vitaminas desempenham um papel crucial no complexo sistema biológico humano, oferecendo uma gama de benefícios essenciais para o corpo. Esses compostos orgânicos, embora necessários em pequenas quantidades, exercem funções-chave que vão desde a facilitação de reações metabólicas até o fortalecimento do sistema imunológico. Essenciais para o crescimento, desenvolvimento e manutenção geral da saúde, as vitaminas desempenham um papel insubstituível na promoção da vitalidade, resistência contra doenças e no suporte ao funcionamento harmonioso do organismo. Uma compreensão abrangente do papel desses micronutrientes é fundamental para cultivar hábitos alimentares saudáveis e alcançar um estado ótimo de bem-estar.
        </p>
        <p>
          Além de serem essenciais para funções metabólicas, as vitaminas têm impacto direto na saúde de órgãos específicos, como a pele, olhos, ossos e sistema cardiovascular. Elas atuam como cofatores vitais em processos enzimáticos que regulam a produção de energia, síntese de proteínas e manutenção do equilíbrio celular.
          <br />
          <br />
          A participação ativa das vitaminas no fortalecimento do sistema imunológico é fundamental para a defesa do corpo contra infecções e doenças. Uma dieta equilibrada, rica em uma variedade de alimentos, é crucial para garantir a ingestão adequada de vitaminas. A compreensão da importância de cada grupo de vitaminas e a manutenção de um consumo adequado contribuem para um estado ótimo de saúde e bem-estar. Em resumo, as vitaminas desempenham um papel integral na promoção da saúde holística, destacando a necessidade de uma abordagem consciente e informada em relação à nutrição e estilo de vida.
        </p>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {mineralSaltsData.map((salt) => (
          <a href="#" key={salt.id} className="block">
            <div
              className="bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md p-5 text-center relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className={`${salt.ribbonClass} w-[60px] h-[10px] rounded-md absolute -top-1.5 left-2`}
              ></div>
              <h2 className="text-lg font-bold uppercase text-gray-700 mt-4">{salt.name}</h2>
              <img
                src={salt.img}
                alt={salt.name}
                width={100}
                height={100}
                className="mx-auto mt-2 rounded-md object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SaisMinerais;
