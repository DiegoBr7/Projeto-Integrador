
var express = require('express');
var router = express.Router();

const AlimentacaoController = require('../controllers/AlimentacaoController');

router.get('/', AlimentacaoController.index )

module.exports = router