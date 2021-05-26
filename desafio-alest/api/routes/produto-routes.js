const express = require('express');
const{addProduto, getAllProdutos, getProduto, updateProduto, deleteProduto} = require('../controllers/produtoController');

const router = express.Router();

//rotas
router.post('/adicionar-produto', addProduto);
router.get('/produtos', getAllProdutos);
router.get('/produto/:id', getProduto);
router.put('/atualizar-produto/:id', updateProduto);
router.delete('/remover-produto/:id', deleteProduto);


module.exports ={
    routes: router
}
