import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'


export default class CadastroProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeProduto: "",
            precoProduto: "",
            imagemProduto: ""

        };

        this.cadastrar = this.cadastrar.bind(this);
        let firebaseConfig = {
            apiKey: "AIzaSyDAxz-kLJxldo_lRUyD9_PODB7Gamkcidw",
            authDomain: "desafio-alest-32128.firebaseapp.com",
            projectId: "desafio-alest-32128",
            storageBucket: "desafio-alest-32128.appspot.com",
            messagingSenderId: "49532462210",
            appId: "1:49532462210:web:af431d2351212e36c5c09b",
            measurementId: "G-7Q91TMY985"
        };
        // Initializando o Firebase caso ja nao esteja
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }


    }
    // fucao responsavel por atualizar produtos no firebase
    update(e) {
        firebase.firestore().collection('Produtos').doc('id-produto').set({ Nome: this.state.nomeProduto, Valor: this.state.precoProduto, Foto: this.state.imagemProduto }).then(() => {
            alert('Alterado com Sucesso!')
            console.log('deu certo')
        }).catch(() => {
            alert('Alguma coisa deu errado ao Alterar :(')
            console.log('deu ruim')
        })
    }
    // funcao responsavel por cadastrar produtos no firebase
    cadastrar(e) {
        firebase.firestore().collection('Produtos').add({ Nome: this.state.nomeProduto, Valor: this.state.precoProduto, Foto: this.state.imagemProduto }).then(() => {
            alert('Cadastrado com Sucesso!')
            console.log('deu certo')
        }).catch(() => {
            alert('Alguma coisa deu errado ao cadastrar :(')
            console.log('deu ruim')
        })
    }
    // funcao responsavel por remover produtos do firebase
    delete(e) {
        firebase.firestore().collection('Produtos').doc('').delete().then(() => {
            alert('Removido com Sucesso!')
            console.log('deu certo')
        }).catch(() => {
            alert('Alguma coisa deu errado ao remover :(')
            console.log('deu ruim')
        })
    }

    //renderizando pagina de cadastro/update
    render() {
        return (
            <div className="mt-5 m-auto">
                <div className="text-center">
                    <h1>Informações do Produto</h1>
                </div>
                <form onSubmit={this.cadastrar}>
                    <div className="form-group">
                        <label htmlFor="nome-produto">Nome do Produto</label>
                        <input type="text" className="form-control" value={this.state.nomeProduto} onChange={(e) => this.setState({ nomeProduto: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco-produto">Preço do Produto</label>
                        <input type="text" className="form-control" value={this.state.precoProduto} onChange={(e) => this.setState({ precoProduto: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem-produto">Imagem do Produto</label>
                        <input type="file" className="form-control" value={this.state.imagemProduto} onChange={(e) => this.setState({ imagemProduto: e.target.value })} />
                    </div>
                    <div className=" mt-2">
                        <button className="btn btn-success" type="submit" onclick={}>Cadastrar Novo</button>
                        <button className="btn btn-info btn-atualizar" type="submit">Atualizar Produto</button>
                    </div>
                </form>
            </div>
        );
    }
}