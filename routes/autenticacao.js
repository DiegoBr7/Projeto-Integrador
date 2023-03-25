
var express = require('express');
const AutenticacaoController = require('../controllers/AutenticacaoController');
var router = express.Router();

router.get('/', AutenticacaoController.index )

router.post('/',AutenticacaoController.criarUsuario)


router.post('/login',AutenticacaoController.autenticacao )


module.exports = router

