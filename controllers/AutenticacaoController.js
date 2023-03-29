const { Usuario } = require('../models')
const bcrypt = require('bcryptjs');

module.exports = {
    index: (req, res) => {

        res.render('login', { erro: '' })
    },

    autenticacao: async (req, res) => {

        try {
            console.log('autenticacao')
            const { password, username } = req.body;
            console.log({ password, username })
            const user = await Usuario.findOne({
                where: { nome: username }
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
            }
        )
        res.redirect('/login')
    }

}

