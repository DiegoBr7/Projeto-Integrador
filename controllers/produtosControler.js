const { Produto } = require('../models');


module.exports = {
  index: async (req, res) => {
    const produtos = await Produto.findAll()
    res.render('index', { produtos, title: "index" });
  },
  create: async (req, res) => {
    const produtos = await Produto.create(
      {
        modelo: req.body.modelo,
        cor: req.body.cor,
        fabricante: req.body.fabricante
      }
    )
    res.redirect("/adicionar-produto");
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
    console.log(nome, preco , id_categorias)
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