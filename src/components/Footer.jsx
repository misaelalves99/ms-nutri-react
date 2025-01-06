import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="logo-description">
          <h1 className="footer-logo">Nutrição</h1>
          <p className="footer-description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="redes-sociais">
          <Link to="https://x.com/MisaelAlves110" target="_blank" className="social-link twitter">
            <FaTwitter />
          </Link>
          <Link to="https://www.facebook.com/misael.alves.92317/" target="_blank" className="social-link facebook">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/misael_alves_99/" target="_blank" className="social-link instagram">
            <FaInstagram />
          </Link>
          <Link to="/skype" target="_blank" className="social-link skype">
            <FaSkype />
          </Link>
          <Link to="https://github.com/misaelalves99" target="_blank" className="social-link github">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target="_blank" className="social-link linkedin">
            <FaLinkedin />
          </Link>
        </div>
        <div className="copyright">
          © Copyright Nutrição. Todos os direitos reservados
        </div>
        <div className="creditos">
          Desenvolvido por <Link to="https://misael-alves-portfolio.vercel.app/" target="_blank"><span>Misael Alves</span></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
