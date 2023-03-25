const {Usuario} = require('../models')
const bcrypt = require ('bcryptjs');

module.exports = {
index:(req,res)=>{
    res.render('autenticacao',{erro:'error'})
},

autenticacao:async(req,res)=>{
  
    try {

        const {password , username} = req.body;
        const user = await Usuario.findOne({
            where:{username}
        });
                 
        if (!user ){
            return res.render('autenticacao',{erro:'Usuario nao encontrado'})
        }

        if(await bcrypt.compare(password, user.password)){

            // Criando uma sessao com usuario logado
       
            req.session.user = user
            res.redirect('/');
        }else{
            res.render('autenticacao',{erro:'senha incorreta'})
        }
    } catch{
       
        res.render('home',{erro:'erro inesperado'})
    }

},



criarUsuario: async (req, res) => {

const rounds = 10;
const hashedPassword = await bcrypt.hash(req.body.senha , rounds)

    const usuario = await Usuario.create(
      {
        nome: req.body.nome,
        email: req.body.email,
        senha: hashedPassword,
        endereco:req.body.endereco,
        telefone:req.body.telefone,
      }
    )
    res.redirect('/login')
    }

}

