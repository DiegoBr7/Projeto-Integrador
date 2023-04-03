const itemAdicionado = document.getElementById("add-to-cart-1");

itemAdicionado.addEventListener('click',function(evt){
evt.preventDefault();

//Obter as informacoes dos produtoo selecionados

const nomeValor = document.querySelector('card-product-name').textContent;

const precoValor = document.querySelector('card-product-proce').textContent;

// criar um objeto com as infomacoes do produto
const product = {
   name:nomeValor,
   price:precoValor
}


// adiciona o produto no localStorage

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

cartItems.push(product);

localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Redirecionar o usuario para a pagina de carrinho

window.location.href = '/carrinho';

})



// -----------------------------------------------------------------------------------------

// let carrinho = localStorage.getItem('carrinho');

// if(carrinho === null){
//  carrinho = [];
// }else{
//   carrinho = JSON.parse(carrinho)
// }

// carrinho.push({nome:nomeValor,preco:precoValor});

// localStorage.setItem('carrinho', JSON.stringify(carrinho))

// window.location.href('/carrinho')









// const acessorio = document.getElementsByClassName('acessorios');
// console.log(acessorio[0])

// const nomeAcessorio = document.getElementsByClassName("card-product-name")[0]
// console.log(nomeAcessorio.value)

// const precoAcessorio = document.getElementsByClassName("card-product-price")[0]
// console.log(precoAcessorio.value)

// acessorio[0].addEventListener('click', 
// function (event){
//     event.preventDefault();
//     console.log("CLICK")     
//     let local = []
//     localStorage.getItem('carrinho')

//   const acessorioValue = acessorio[0].value
//   console.log(acessorioValue)

//   const precoValue = precoAcessorio[0].value
//   console.log(precoValue)

//   const nomeValue = nomeAcessorio[0].value
//   console.log(nomeValue)

//   local.push({acessorioValue,precoValue,nomeValue})

//   localStorage.setItem('carrinho',JSON.stringify(local))
//   }
//   )

  // pegar o valor como get item
  //na tela de carrinho
  //realizar a soma de calculo no botao de quantidade
  // input de alterar
  // fazer a mesma coisa no de mais e menos no do valor total colocar no input 

  

  




  