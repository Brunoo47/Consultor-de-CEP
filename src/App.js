import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 89220306/json/
    if (input === '') {
      alert('preencha algum cep');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
      // You can set the cep state if required
      // setCep(response.data);
    } catch (error) {
      alert('Ops! Erro ao buscar o cep');
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Consulta de cep</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Consulte seu cep"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="ButtonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000" />
        </button>
      </div>
      <main className="main">
        <h2>15540386778</h2>
        <span>Rua teste alguma</span>
        <span>complemento</span>
        <span>vila rosa</span>
        <span>parana</span>
      </main>
    </div>
  );
}

export default App;
