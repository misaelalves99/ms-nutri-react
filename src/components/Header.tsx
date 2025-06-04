// src/components/Header.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-emerald-300 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <h1 className="text-2xl font-bold text-teal-900">
          <Link to="/">MsNutri</Link>
        </h1>

        {/* Botão do menu hamburguer para mobile */}
        <div
          className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span
            className={`h-1 bg-teal-900 rounded transition-transform ${
              menuOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-1 bg-teal-900 rounded transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-1 bg-teal-900 rounded transition-transform ${
              menuOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>

        {/* Navegação */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute top-16 left-0 w-full flex-col items-center gap-4 bg-emerald-300 py-6 shadow-md md:shadow-none md:static md:flex md:flex-row md:w-auto md:bg-transparent md:gap-6`}
        >
          <Link
            to="/"
            className="text-teal-900 text-lg hover:bg-teal-700 hover:text-white px-4 py-2 rounded transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="text-teal-900 text-lg hover:bg-teal-700 hover:text-white px-4 py-2 rounded transition"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-teal-900 text-lg hover:bg-teal-700 hover:text-white px-4 py-2 rounded transition"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
