// const openai = require('openai')('<sua chave de API>')
// openai.completion.create({
//   engine: 'davinci',
//   prompt: 'Olá, como posso ajudar?',
//   max_tokens: 50,
// }).then(response => {
//   console.log(response.choices[0].text)
// }).catch(error => {
//   console.log(error)
// })



const {Categoria} = require('../models')

module.exports = {
   index: async (req,res)=>{
    const {id} = req.params
    const categorias = await Categoria.findAll()
    res.render('categoria',{categorias})


  }
}