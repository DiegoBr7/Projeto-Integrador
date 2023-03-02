const { Produtos } = require('../models');


module.exports = {
  index: async (req, res) => {
    const produtos = await Produtos.findAll()
    res.render('index', { produtos, title: "index" });
  },
  create: async (req, res) => {
    const produtos = await Produtos.create(
      {
        modelo: req.body.modelo,
        cor: req.body.cor,
        fabricante: req.body.fabricante
      }
    )
    res.redirect("/produtos");
  },
  form: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.render('adicionar-produto', { title: "index" })
    }
    let produto = await Produtos.findByPk(id)
    res.render('editar-produto', { produto, title: "index" })
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { modelo, cor, fabricante } = req.body;
    const produtos = await Produtos.update(
      { modelo, cor, fabricante },
      {
        where: { id },
      },
    )
    res.redirect("/produtos");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Produtos.destroy(
      {
        where: {id}
      }

    )
   res.redirect("/produtos")
   
  }


}