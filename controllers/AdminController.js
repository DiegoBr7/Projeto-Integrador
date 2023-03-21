const { Produto, Categoria } = require('../models')


module.exports = {
    indexProdutos: async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('admin/index', { produtos, title: "index" })
    },
    createProdutos: async (req, res) => {
        const produto = await Produto.create(
            {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                categoria_id: req.body.categoria_id
            }
        )
        res.redirect('admin/produtos')
    },

    formProduto: async (req, res) => {
        const { id } = req.params;
        const categoria = await categoria.findAll();
        if (!id) {
            res.render('adicionar/editar', { produto, categoria, title: "Editar Produto" })
        }
        const produto = await Produto.findByPk(id);
        res.render('produtos/editar', { produto, categoria, title: "Editar Produto" });

        // updateProduto: async (req, res) => {
        //     const { id } = req.params;
        //     const { nome, descricao, preco, categoria_id } = req.body;
        //     const produto = await Produto.update(
        //         { nome, descricao, preco, categoria_id },
        //         {
        //             where: { id }
        //         },
        //     )
        //     res.render('admin/produto');
        // },

            deleteProduto = async (req, res) => {
                const { id } = req.params;
                await Produto.destroy(
                    {
                        where: { id }
                    }
                )
            }
    }
}
