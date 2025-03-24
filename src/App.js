import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
    alert("Preencha algum CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
        console.log(response.data)
      setInput("")
    } catch (error) {
      alert('Erro ao buscar o cep');
      setInput('');
      setCep({})
    }
  }

  return (
      <div className="container">
        <h1 className="title">Consulte seu CEP</h1>
        <div className="containerInput">
          <input
              type="text"
              placeholder="Consulte seu cep"
              value={input}
              onChange={(event) => setInput(event.target.value)}

          />
          <button className="ButtonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#000"/>
          </button>
        </div>
        <main className="main">
          {cep.cep && (
              <>
                <h2>CEP: {cep.cep}</h2>
                <span>RUA: {cep.logradouro}</span>
                <span>BAIRRO: {cep.bairro}</span>
                <span>CIDADE: {cep.localidade} - {cep.uf}</span>
                <span>DDD: {cep.ddd}</span>
              </>
          )}
        </main>
      </div>
  );
}

export default App;
