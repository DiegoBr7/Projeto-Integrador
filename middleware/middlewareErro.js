const { Produto } = require('../models');

const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'Livro não encontrado!';
const ERRO_400 = 'Request inválido!';

class NotFoundError extends Error {
  constructor() {
    super(ERRO_404);
    this.name = 'NOT_FOUND';
  }
}

module.exports = {
  async criar(req, res){
    try {
      const { nome  } = req.body;
      await Livro.create({nome, categorias_id });
      return res.status(204).json();
    } catch (erro) {
      console.log(erro);
      if(erro?.name === 'SequelizeValidationError') {
        return res.status(400).json({mensagem: ERRO_400});
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  },

  async listar(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.status(200).json(produtos);
    } catch (erro) {
      console.log(erro)
      return res.status(500).json({mensagem: ERRO_500})
    }
  },

  async obter(req, res) {
    try {
      const {id} = req.params;
      const produto = await produto.findByPk(id);
      if (!produto) throw new NotFoundError();
      return res.status(200).json(livro);
    } catch (erro) {
      console.log(erro);

      if (erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  },

  async atualizar(req, res) {
    try {
      const {id} = req.params;
      const {nome, categorias_id} = req.body;
      const [] = await Produto.update({nome, categorias_id}, {
        where: {id}
      });

      console.log(livroId)

      if (!Produto) throw new NotFoundError();
      return res.status(204).json();
    } catch (erro) {
      console.log(erro);
      if (erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  },

  async deletar(req, res) {
    try {
      const {id} = req.params;
      const idRemovido = await Produto.destroy({where: {id}});
      if (!idRemovido) throw new NotFoundError();
      return res.status(204).json();
    } catch (erro) {
      console.log(erro);
      if (erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  }
};