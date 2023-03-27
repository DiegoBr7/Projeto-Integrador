
var express = require('express');
const ConfirmationController = require('../controllers/ConfirmationController');
var router = express.Router();


router.get('/' , ConfirmationController.index)




module.exports = router