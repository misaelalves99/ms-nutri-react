// src/pages/Sobre.jsx
import "./Sobre.css";

const Sobre = () => {
  return (
    <section className="sobre">
      <h1 className="titulo">Sobre</h1>
      <hr className="hr-sobre" />
      <h2 className="subtitulo-sobre">Nutrição: O Alicerce Fundamental para a Saúde Integral</h2>
      <div className="container">
        <p className="texto-info">"Atenção: as informações neste site são de caráter informativo e não substituem orientações profissionais."</p>
        <p className="texto-sobre">
          A nutrição é um pilar essencial para a saúde e bem-estar, desempenhando um papel central no funcionamento harmonioso do corpo humano. Vai além de simplesmente ingerir alimentos; refere-se à ingestão balanceada de nutrientes que fornecem energia, suportam o crescimento, revitalizam os tecidos e sustentam uma variedade de funções fisiológicas.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
