
var express = require('express');
const HomeController = require('../controllers/HomeController');
var router = express.Router();

router.get('/', HomeController.index )

module.exports = router