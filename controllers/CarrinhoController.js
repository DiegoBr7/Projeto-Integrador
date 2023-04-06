const { Produto } = require('../models')
const {Compra} = require('../models')

module.exports = {
  calcularFrete: async (req, res) => {
    const { cep, peso, valor } = req.query;

    // Aqui você pode implementar a lógica de cálculo do frete com base no CEP,
    // peso e valor do produto. Isso pode ser feito utilizando a API de alguma
    // transportadora ou serviço de entrega. Como esse é um exemplo simples,
    // vamos apenas retornar um valor fixo.
    const frete = 10;


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

  index: (req, res) => {
    console.log("index")
    console.log(req.params)
    res.render('carrinho', { title: 'carrinho' })
  },


  // calculadora:(req,res)=>{
  //     Produto.findAll({
  //     attributes: ['preco'],
  //     raw: true
  //   }).then((precos) => {
  //     res.render('carrinho', { precos: precos });
  //   });

  // },

  exibir: async (req, res) => {
    const produtos = await Produto.findAll({
      where: {
        id: req.params.id
      }
    })
    res.render('carrinho', { produtos })


    //  .catch(err =>{
    //   console.log(err)
    //   res.status(500).send(`<script>alert('Erro interno do servidor.');</script>`);
    // })

  },
  // const produtos = await Produto.findAll({
    //   where: {
      //     id: req.params.id
      //   }
      // })
      // res.render('carrinho', { produtos })
      addCarrinho :
      async (req, res) => {
        try {
          const {id ,id_usuario,quantidade } = req.params;
          console.log({id ,id_usuario,quantidade })
         const compra = await Compra.create( {
          id_usuario  : req.body.id_usuario,
          id_produto: req.body.id_usuario,
          data_compra = req.body.compra
        });
         console.log(compra)
          //res.status(201).json(compra);
        } catch (error) {
          console.error('Erro ao inserir compra:', error);
          res.status(500).json({ error: 'Erro ao inserir compra' });
        }
      }
     // create: async (req, res) => {
       // const produtos = await Produto.create(
         // {
           // nome: req.body.nome,
           // preco: req.body.preco,
           // id_categorias: req.body.id_categorias
         // }
       // )
        //res.redirect("/");
      },
    

      
      // criar model compra
      //criar o metodo de inserir compra (create)
      //console log pra ve o que ta chegando
      //controller para exibir todos os items do carrinho
      // parametros


    }
  






// atualizar e renderizar com o novo objeto adicionado