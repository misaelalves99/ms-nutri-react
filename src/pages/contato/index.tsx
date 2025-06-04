// src/pages/contato/index.tsx

"use client";

import React from "react";

const Contato: React.FC = () => {
  return (
    <section className="font-sans p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl text-center text-gray-800 mb-5">Contato</h1>
      <hr className="h-1 bg-gradient-to-r from-green-400 to-green-200 border-0 mb-8" />

      <div className="container mx-auto flex flex-wrap gap-8 justify-center">
        {/* Informações de contato */}
        <div className="flex-1 min-w-[300px] bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <div className="mb-6">
            <h4 className="text-green-900 text-xl font-semibold mb-2">Email</h4>
            <p className="text-gray-600">misaelalves110@gmail.com</p>
          </div>
          <div className="mb-6">
            <h4 className="text-green-900 text-xl font-semibold mb-2">Whatsapp</h4>
            <p className="text-gray-600">(33) 99941-6186</p>
          </div>
          <div>
            <h4 className="text-green-900 text-xl font-semibold mb-2">Localização</h4>
            <p className="text-gray-600">
              Rua Francisco Souza Campos, Rio Pretinho, Teófilo Otoni, MG
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="flex-1 min-w-[300px] bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome Completo"
                className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              name="assunto"
              placeholder="Assunto"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Mensagem"
              required
              className="p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-300 text-white py-3 rounded cursor-pointer hover:from-green-700 hover:to-green-600 transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
