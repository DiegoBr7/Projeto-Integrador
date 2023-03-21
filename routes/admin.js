
var express = require('express');
var router = express.Router();

const categoriaController = require('../controllers/CategoriaController');


router.get('/' , (req, res)=>{
  res.render('admin', {title:'admin'})
})

module.exports = router;