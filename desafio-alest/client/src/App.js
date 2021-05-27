import './App.css';
import Card from './componentes/Card'
import Header from './componentes/Header'
import SearchBar from './componentes/Search-Bar';
import CadastroProduto from './componentes/Cadastro-Produto'
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <div className="container p-4 col-12">
            <Router>
                <div>
                    <Header />
                    <SearchBar />
                    <div className="col-12 row">
                        <div className="col-2"></div>
                        <Link to="/" className="btn btn-info btn-nav col-4">Produtos</Link>
                        <Link to="/cadastro/" className="btn btn-info btn-nav col-4">Cadastrar Produto</Link>

                        <div className="col-2"></div>
                    </div>
                    <Route path="/" exact component={Card} />
                    <Route path="/cadastro/" component={CadastroProduto} />
                </div>
            </Router>
        </div>



    );
}

export default App;
