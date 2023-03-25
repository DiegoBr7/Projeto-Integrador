
var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();

const login = require('../controllers/loginController');


router.get('/' , loginController.index);

router.post('/login', loginController.login);

module.exports = router;