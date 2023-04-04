const {Usuario} = require('../models')

module.exports = {
    
    index:(req,res)=>{
        Usuario.findAll()
        .then(usuarios => {
        res.render('confirmation', {usuarios})
    })
        
        .catch(err =>{
            console.log(err)
            res.status(500).send(`<script>alert('Erro interno do servidor.');</script>`);
          })
        }
}


// index:(req,res)=>{
//     Usuario.findAll()
//       .then(usuarios => {
//         res.render('confirmation', {usuarios})
//       })
//       .catch(err =>{
//         console.log(err)
//         res.status(500).send(`<script>alert('Erro interno do servidor.');</script>`);
//       })
//     }