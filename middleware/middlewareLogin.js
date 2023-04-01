//funcao controller
//parametro req,res,next
//if else
//verificar se tem usuario na session



const express = require('express');

const router = express.Router();

router.get('/', function checarUsuario (req, res , next) {
 if(!req.session.user){

    return res.status(200).json(data);
}

next();



});

module.exports = router;
