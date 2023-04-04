//funcao controller
//parametro req,res,next
//if else
//verificar se tem usuario na session



const express = require('express');

const router = express.Router();

module.exports ={

 checarUsuario : (req, res , next) => {
 if(!req.session.user){

    req.session.user = {
        username: 'usuario', // substituir pelo nome de usuário do usuário
        email: 'usuario@gmail.com'// substituir pelo email do usuário
        // outros dados do usuário, se houver
    }

    return res.status(200).json(data);
}

next();

}

};

module.exports = router;
