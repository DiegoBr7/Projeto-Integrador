const { Router } = require('express');
var router = Router();
const loginControler = require('../controllers/LoginController');
const checarUsuario = require('../middleware/middlewareLogin')

/* GET home page. */
router.get('/',  loginControler.index );


router.post('/login', loginControler.login);

module.exports = router;

module.exports=router