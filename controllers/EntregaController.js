const {buscarEnderecoPorCep} = require('../services/request/endereco')
const express = require('express');
const axios = require('axios');
const app = express();


const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'nao encontrado';
const ERRO_400 = 'Request invalido'

module.exports ={
    async obterEnderecoPorCep (req,res) {

    try{
        const {cep} = req.params;
        const endereco = await buscarEnderecoPorCep(cep);
        return res.status(200).json(endereco);
    }catch(erro){
      if(erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(404).json({mensagem: ERRO_500});
    }
    },

// define o endpoint para calcular o frete
calcular_frete: (req, res) => {
  const cep = req.body.cep; // lê o CEP enviado pelo formulário
  const url = `viacep.com.br/ws/01001000/json/${cep}`; // URL da API de cálculo de frete
  
  axios.get(url)
    .then(response => {
      const frete = response.data.frete; // extrai o valor do frete da resposta da API
      res.render('carrinho', { frete }); // renderiza a página com o valor do frete atualizado
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Erro ao calcular o frete'); // envia uma mensagem de erro ao usuário
    });
}

}