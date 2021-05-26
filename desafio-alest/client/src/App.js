import './App.css';
import Card from './componentes/Card'
import Header from './componentes/Header'
import SearchBar from './componentes/Search-Bar';
import CadastroProduto from './componentes/Cadastro-Produto'

function App() {
  
  return (
    <div className="container p-4 col-12">
      <Header />
      <SearchBar />
      <div className="container row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
        <CadastroProduto />
      <div>
         
      </div>

    </div>
  );
}

export default App;
