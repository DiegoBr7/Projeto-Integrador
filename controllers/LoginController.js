const {Usuario} = require('../models')
const bcrypt = require ('bcryptjs');

module.exports = {
    index:(req,res)=>{
        res.render('login',{title:'express'})
    },


    login:async(req,res)=>{

        try {

            const {password , username} = req.body;
            const user = await Usuario.findOne({
                where:{username}
            });

            if ( !user ){
                return res.render('autenticacao',{erro:'Usuario nao encontrado'})
            }

            if(await bcrypt.compare(password, user.password)){

                // Criando uma sessao com usuario logado

                req.session.user = user
                redirect('/login');
            }else{
                res.render('autenticacao',{erro:'senha incorreta'})
            }
        } catch{

            res.render('autenticacao',{erro:'erro inesperado'})
        }

    }
}