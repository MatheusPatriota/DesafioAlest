'use strict';

const firebase = require('../db')
const Produto = require('../models/produto')
const firestore = firebase.firestore();

const addProduto = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Produtos').doc().set(data);
        res.send('Cadastrado Com Sucesso!')
    } catch (e) {
        res.status(400).send(e.message);
    }
}

const getAllProdutos = async (req, res, next) => {
    try {
        const produtos = await firestore.collection('Produtos');
        const data = await produtos.get();
        const arrayProdutos = [];
        if (data.empty) {
            res.status(404).send('Nenhum Produto Cadastrado');
        } else {
            data.forEach(doc => {
                if (doc.data().hasOwnProperty('Nome')) {
                    const produto = new Produto(
                        doc.data().Nome,
                        doc.data().Valor,
                        doc.data().Foto
                    );
                    arrayProdutos.push(produto);
                }
            });
            res.send(arrayProdutos);

        }
    } catch (e) {
    }
}


module.exports = {

    addProduto,
    getAllProdutos
}