
var express = require('express');
var router = express.Router();


const EntregaController = require('../controllers/EntregaController');
const carrinhoController = require('../controllers/CarrinhoController');



// router.get('/carrinho', carrinhoController.calcularFrete);

router.get('/endereco', EntregaController.obterEnderecoPorCep)

router.get('/',carrinhoController.exibir)

router.get('/', carrinhoController.index )

// router.post('/' , EntregaController.obterEnderecoPorCep)

module.exports = router