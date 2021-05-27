import React from 'react'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import axios from 'axios'

class CadastroProduto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            valor: '',
            imagem: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    subimitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8000/adicionar-produto",this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    // getProduto() {
    //     axios.get("http://localhost:8000/produto/")
    //       .then(response => {
    //         this.setState({ produtos: response.data })
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }

    update(key) {
    axios.put(`http://localhost:8000/atualizar-produto/${this.props.id}`, this.state)
      .then(response => {
        this.setState({ produtos: response.data })
      })
      .catch(error => {
        console.log(error)
      })
    }


    render() {
        const { nome, valor, imagem } = this.state;
        return (
            <div className="mt-5 m-auto">
                <div className="text-center">
                    <h1>Informações do Produto</h1>
                </div>
                <form onSubmit={this.subimitHandler}>
                    <div className="form-group">
                        <label htmlFor="nome-produto">Nome do Produto</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco-produto">Preço do Produto</label>
                        <input
                            className="form-control"
                            type="text"
                            name="valor"
                            value={valor}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem-produto">Imagem do Produto</label>
                        <input
                            className="form-control"
                            type="file"
                            name="imagem"
                            value={imagem}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className=" mt-2">
                        <button className="btn btn-success" type="submit" >Cadastrar Novo</button>
                    </div>
                </form>
            </div>
        );
    }


}

export default CadastroProduto;