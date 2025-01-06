import "./SaisMinerais.css";
import { mineralSaltsData } from "../data";

const SaisMinerais = () => {
  return (
    <section className="mineral-salts">
      <h1 className="title">Sais Minerais</h1>
      <hr className="divider-mineral-salts" />
      <h2 className="subtitle-mineral-salts">Nutrição: O Alicerce Fundamental para a Saúde Integral</h2>
      <div className="container">
        <div className="text-section">
          <p>
            As vitaminas desempenham um papel crucial no complexo sistema
            biológico humano, oferecendo uma gama de benefícios essenciais para
            o corpo. Esses compostos orgânicos, embora necessários em pequenas
            quantidades, exercem funções-chave que vão desde a facilitação de
            reações metabólicas até o fortalecimento do sistema imunológico.
            Essenciais para o crescimento, desenvolvimento e manutenção geral
            da saúde, as vitaminas desempenham um papel insubstituível na
            promoção da vitalidade, resistência contra doenças e no suporte ao
            funcionamento harmonioso do organismo. Uma compreensão abrangente
            do papel desses micronutrientes é fundamental para cultivar hábitos
            alimentares saudáveis e alcançar um estado ótimo de bem-estar.
          </p>
          <p>
            Além de serem essenciais para funções metabólicas, as vitaminas têm
            impacto direto na saúde de órgãos específicos, como a pele, olhos,
            ossos e sistema cardiovascular. Elas atuam como cofatores vitais em
            processos enzimáticos que regulam a produção de energia, síntese de
            proteínas e manutenção do equilíbrio celular. A participação ativa
            das vitaminas no fortalecimento do sistema imunológico é fundamental
            para a defesa do corpo contra infecções e doenças.
            <br />
            <br />
            Uma dieta equilibrada, rica em uma variedade de alimentos, é
            crucial para garantir a ingestão adequada de vitaminas. A
            compreensão da importância de cada grupo de vitaminas e a
            manutenção de um consumo adequado contribuem para um estado ótimo
            de saúde e bem-estar. Em resumo, as vitaminas desempenham um papel
            integral na promoção da saúde holística, destacando a necessidade
            de uma abordagem consciente e informada em relação à nutrição e
            estilo de vida.
          </p>
        </div>
      </div>
      <hr />
      <div className="mineral-salts-container">
        <div className="mineral-salts-section">
          {mineralSaltsData.map((salt) => (
            <a href="#" key={salt.id}>
              <div className="mineral-salts-card">
                <div className={salt.ribbonClass}></div>
                <h2 className="topic">{salt.name}</h2>
                <img src={salt.img} alt={salt.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaisMinerais;
