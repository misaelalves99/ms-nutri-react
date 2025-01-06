// src/pages/Contato.jsx
import "./Contato.css";

const Contato = () => {
  return (
    <section className="contato">
      <h1>Contato</h1>
      <hr />
      <div className="container">
        <div className="info">
          <div className="email">
            <h4>Email</h4>
            <p>misaelalves110@gmail.com</p>
          </div>
          <div className="whatsapp">
            <h4>Whatsapp</h4>
            <p>(33) 99941-6186</p>
          </div>
          <div className="localizacao">
            <h4>Localização</h4>
            <p>Rua Francisco Souza Campos, Rio Pretinho, Teófilo Otoni, MG</p>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="row">
              <input type="text" name="nome" placeholder="Nome Completo" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <input type="text" name="assunto" placeholder="Assunto" />
            <textarea name="mensagem" rows="5" placeholder="Mensagem" required></textarea>
            <button type="submit" className="btn-enviar">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;