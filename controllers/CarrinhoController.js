const {Produto}= require('../models')

module.exports ={
     calcularFrete : async (req, res) => {
  const { cep, peso, valor } = req.query;

  // Aqui você pode implementar a lógica de cálculo do frete com base no CEP,
  // peso e valor do produto. Isso pode ser feito utilizando a API de alguma
  // transportadora ou serviço de entrega. Como esse é um exemplo simples,
  // vamos apenas retornar um valor fixo.
  const frete = 10;
  console.log(calcularFrete)

  // Aqui você pode buscar o endereço do cliente utilizando o CEP informado.
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    res.render('carrinho', {
      title: 'Carrinho',
      frete,
      endereco: data,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Erro ao buscar endereço.' });
  }
}, 

  index:(req,res)=>{
    console.log("index")
    res.render('carrinho' , {title:'carrinho'})
  } ,

  // calculadora:(req,res)=>{
  //     Produto.findAll({
  //     attributes: ['preco'],
  //     raw: true
  //   }).then((precos) => {
  //     res.render('carrinho', { precos: precos });
  //   });

  // },

  exibir:(req,res)=>{
     Produto.findAll().then(produtos =>{
      res.render('carrinho',{produtos})
     
    }).catch(err =>{
      console.log(err)
      res.status(500).send(`<script>alert('Erro interno do servidor.');</script>`);
    })

     }
  }





// atualizar e renderizar com o novo objeto adicionado