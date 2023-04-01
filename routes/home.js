
var express = require('express');
const HomeController = require('../controllers/HomeController');
const ProdutoController = require('../controllers/produtosControler')
var router = express.Router();

router.get('/', ProdutoController.index )

module.exports = router