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
          <Link to="/twitter" className="social-link twitter">
            <FaTwitter />
          </Link>
          <Link to="/facebook" className="social-link facebook">
            <FaFacebook />
          </Link>
          <Link to="/instagram" className="social-link instagram">
            <FaInstagram />
          </Link>
          <Link to="/skype" className="social-link skype">
            <FaSkype />
          </Link>
          <Link to="/github" className="social-link github">
            <FaGithub />
          </Link>
          <Link to="/linkedin" className="social-link linkedin">
            <FaLinkedin />
          </Link>
        </div>
        <div className="copyright">
          © Copyright Nutrição. Todos os direitos reservados
        </div>
        <div className="creditos">
          Desenvolvido por <span>Misael Alves</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
