
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const categoriaController = require('../controllers/CategoriaController');

const produtoPath = path.resolve(__dirname, '../databases/dados.json')

router.get('/' , categoriaController.index)


module.exports = router