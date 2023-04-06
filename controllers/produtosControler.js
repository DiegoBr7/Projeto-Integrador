const { Produto } = require('../models');


module.exports = {
  index: async (req, res) => {
    const produtos = await Produto.findAll()

    res.render('home', { produtos, title: "index" });
  },
  create: async (req, res) => {
    const produtos = await Produto.create(
      {
        nome: req.body.nome,
        preco: req.body.preco,
        id_categorias: req.body.id_categorias
      }
    )
    res.redirect("/");
  },
  form: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.render('adicionar-produto', { title: "index" })
    }
    let produto = await Produto.findByPk(id)
    res.render('editar-produto', { produto, title: "index" })
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, preco, id_categorias } = req.body;

    const produtos = await Produto.update(
      { nome, preco , id_categorias },
      {
        where: { id },
      },
    )
    console.log(produtos,'produtos')
    res.redirect("/");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Produto.destroy(
      {
        where: {id}
      }

    )
   res.redirect("/produtos")
   
  }


}