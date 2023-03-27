
var express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
const EntregaController = require('../controllers/EntregaController');
var router = express.Router();

router.get('/', CarrinhoController.index )

router.post('/' , EntregaController.obterEnderecoPorCep)

module.exports = router