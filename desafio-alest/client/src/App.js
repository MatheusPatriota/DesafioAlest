import './App.css';
import Card from './componentes/Card'
import Header from './componentes/Header'
import SearchBar from './componentes/Search-Bar';
import CadastroProduto from './componentes/Cadastro-Produto'

function App() {
    
    return (
        <div className="container p-4 col-12">

            {/* <CadastroProduto /> */}
            <Card/>
           
        </div>
    );
}

export default App;
