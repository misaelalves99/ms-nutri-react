// src/components/Footer.tsx

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaGithub, FaLinkedin, } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-300 text-white py-12 px-5 shadow-inner font-sans">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Logo e descrição */}
        <div className="flex flex-col items-center">
          <h1 className="text-[2.8rem] font-bold text-emerald-900 mb-2">Nutrição</h1>
          <p className="text-lg text-gray-800 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://x.com/MisaelAlves110"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/misael.alves.92317/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/misael_alves_99/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="/skype"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaSkype />
          </a>
          <a
            href="https://github.com/misaelalves99"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-emerald-300 text-xl shadow-md hover:bg-emerald-900 hover:text-white transition-all"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Direitos autorais e créditos */}
        <div className="text-base text-gray-800">
          © Copyright Nutrição. Todos os direitos reservados
        </div>
        <div className="text-base text-gray-800">
          Desenvolvido por{' '}
          <a
            href="https://misael-alves-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:underline"
          >
            Misael Alves
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
