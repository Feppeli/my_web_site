'use client'
import React, { useState } from 'react';

const FormContact: React.FC = () => {
  // Defina os estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mesage, setMesage] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os valores do formulário, como enviar para um servidor, por exemplo
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mesage:', mesage);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm lg:max-w-4xl rounded mx-auto mt-12 p-4 bg-zinc-800">
      <div className="mb-4">
        <label htmlFor="nome" className="block font-bold mb-2 text-left text-white mt-6">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2 text-left text-white mt-6">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite seu email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mesage" className="block font-bold mb-2 text-left text-white mt-6">
          Mesage
        </label>
        <textarea
          id="mesage"
          value={mesage}
          onChange={(e) => setMesage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 h-36 lg:h-56 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite seu Mesage"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8 w-full mb-4"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormContact;