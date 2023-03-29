const { Usuario } = require('../models')
const bcrypt = require('bcryptjs');

module.exports = {
    index: (req, res) => {

        res.render('autenticacao', { erro: '' })
    },

    login:(req,res) =>{
        res.render('login',{erro:''} )
    },

    autenticacao: async (req, res) => {

        try {
            console.log('autenticacao')
            const { email, password, username } = req.body;
            console.log(req.body)

            const user = await Usuario.findOne({
                where: {email }
            });
            console.log('user', user)
            if (!user) {
                console.log('usuario nao existe')
                return res.render('login', { erro: 'Usuario nao encontrado' })
            }

            if (await bcrypt.compare(password, user.senha)) {
                console.log('comparando senha')
                // Criando uma sessao com usuario logado

                req.session.user = user
                res.redirect('/home');
            } else {
                console.log('usuario ou senha errado')
                res.render('login', { erro: 'senha incorreta' })
            }
        } catch (erro) {

            console.log(erro)
            res.render('login', { erro: 'erro inesperado' })
        }

    },



    criarUsuario: async (req, res) => {

        const rounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.senha, rounds)

        const usuario = await Usuario.create(
            {
                nome: req.body.nome,
                email: req.body.email,
                senha: hashedPassword,
                endereco: req.body.endereco,
                telefone: req.body.telefone,
                tipo:2
            }
        )
        res.redirect('/login')
    },

    
    criarUsuarioAdmin: async (req, res) => {

        const rounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.senha, rounds)

        const usuario = await Usuario.create(
            {
                nome: req.body.nome,
                email: req.body.email,
                senha: hashedPassword,
                endereco: req.body.endereco,
                telefone: req.body.telefone,
                tipo:1
            }
        )
        res.redirect('/login')
    }



}

