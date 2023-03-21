const { Router } = require('express');
var router = Router();
const produtosControler = require('../controllers/produtosControler');


router.post('/adicionar-produto',produtosControler.create);



/* GET home page. */
router.get('/', produtosControler.index);

router.get('/editar/:id?', produtosControler.form);

router.delete('/:id' , produtosControler.delete);

router.put('/editar/:id', produtosControler.update)
    

module.exports=router