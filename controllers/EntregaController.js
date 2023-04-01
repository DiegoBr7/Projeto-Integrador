const {buscarEnderecoPorCep} = require('../services/request/endereco')
const express = require('express');
const axios = require('axios');
const app = express();


const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'nao encontrado';
const ERRO_400 = 'Request invalido';

const valoresFretePorRegiao = {
  'SP' : 'R$ 19,90',
  'RS' : 'R$ 39,90',
  'Outros' : 'R$ 40,00'


}

module.exports ={
    async obterEnderecoPorCep (req,res) {

    try{
        const {cep} = req.query;
        const {uf} = await buscarEnderecoPorCep(cep);

        const regiaoConhecida = uf in valoresFretePorRegiao;

        const valorFrete = valoresFretePorRegiao [regiaoConhecida? endereco.uf : 'Outros'] 
        return res.status(200).json(valorFrete);
    }catch(erro){
      if(erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(404).json({mensagem: ERRO_500});
    }
    },

// // define o endpoint para calcular o frete
// calcular_frete: (req, res) => {
//   const cep = req.body.cep; // lê o CEP enviado pelo formulário
//   const url = `viacep.com.br/ws/01001000/json/${cep}`; // URL da API de cálculo de frete
  
//   axios.get(url)
//     .then(response => {
//       const frete = response.data.frete; // extrai o valor do frete da resposta da API
//       res.render('carrinho', { frete }); // renderiza a página com o valor do frete atualizado
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).send('Erro ao calcular o frete'); // envia uma mensagem de erro ao usuário
//     });
// },

async calcularFrete (req, res) {
  try {
    const cep = req.body.cep; // lê o CEP enviado pelo formulário
    const { uf } = await buscarEnderecoPorCep(cep); // busca o estado a partir do CEP
    const valorProduto = parseFloat(req.body.produto); // lê o valor do produto enviado pelo formulário
    const valorFrete = uf in valoresFretePorRegiao ? valoresFretePorRegiao[uf] : valoresFretePorRegiao['Outros']; // busca o valor do frete a partir do estado

    if (isNaN(valorProduto)) { // verifica se o valor do produto é um número válido
      return res.status(400).json({ mensagem: 'O valor do produto deve ser um número válido' });
    }

    const total = valorProduto + parseFloat(valorFrete.replace(',', '.')); // calcula o total (produto + frete)
    return res.status(200).json({ total }); // retorna o total como resposta
  } catch (erro) {
    console.log(erro);
    return res.status(500).json({ mensagem: ERRO_500 });
  }
}

}