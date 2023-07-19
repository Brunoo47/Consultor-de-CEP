import{ FiSearch} from 'react-icons/fi';
import './style.css';


function App() {
  return (
    <div className="container">
      <h1 className="title">Gerador de cep</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Bota o cep ai"
    />
    <button className="ButtonSearch">
    <FiSearch size={25} color='#000'></FiSearch>

    </button>
  </div>
  <main className='main'>
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
