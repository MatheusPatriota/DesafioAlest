const express = require('express');
const{addProduto, getAllProdutos} = require('../controllers/produtoController');

const router = express.Router();

router.post('/adicionar-produto', addProduto);
router.get('/produtos', getAllProdutos);


module.exports ={
    routes: router
}
