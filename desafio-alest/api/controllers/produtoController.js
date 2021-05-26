'use strict';

const firebase = require('../db')
const Produto = require('../models/produto')
const firestore = firebase.firestore();

// função responsavel por adicionar produto na base de dados
const addProduto = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Produtos').doc().set(data);
        res.status(201).send('Cadastrado Com Sucesso!')
    } catch (error) {
        res.status(400).send(error.message);
    }
}
// função responsavel por pegar todos os produtos na base de dados
const getAllProdutos = async (req, res, next) => {
    try {
        const produtos = await firestore.collection('Produtos');
        const data = await produtos.get();
        const arrayProdutos = [];
        if (data.empty) {
            res.status(404).send('Nenhum Produto Cadastrado');
        } else {
            data.forEach(doc => {
                if (doc.data().hasOwnProperty('nome')) {
                    const produto = new Produto(
                        doc.id,
                        doc.data().nome,
                        doc.data().valor,
                        doc.data().imagem
                    );
                    arrayProdutos.push(produto);
                }

            });
            res.send(arrayProdutos);

        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
// função responsavel por pegar produto especifico a partir do seu id
const getProduto = async (req, res, next) => {
    try {
        const idProduto = req.params.id;
        const produto = await firestore.collection('Produtos').doc(idProduto);
        const data = await produto.get();
        if (!data.exists) {
            res.status(404).send('Produto não encontrado!');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// função responsavel por atualizar o produto a partir do seu id
const updateProduto = async (req, res, next) => {
    try {
        const idProduto = req.params.id;
        const data = req.body;
        const produto = await firestore.collection('Produtos').doc(idProduto);
        await produto.update(data);

        res.sen(data.data())



    } catch (error) {
        res.status(400).send(error.message);
    }
}

// função responsavel por remover o produto a partir do seu id
const deleteProduto = async (req, res, next) => {
    try {
        const idProduto = req.params.id;
        await firestore.collection('Produtos').doc(idProduto).delete();
        res.send('Produto excluido com sucesso!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {

    addProduto,
    getAllProdutos,
    getProduto,
    updateProduto,
    deleteProduto
}