
const acessorio = document.getElementsByClassName('acessorios');
console.log(acessorio[0])

const nomeAcessorio = document.getElementsByClassName("card-product-name")[0]
console.log(nomeAcessorio.value)

const precoAcessorio = document.getElementsByClassName("card-product-price")[0]
console.log(precoAcessorio.value)

acessorio[0].addEventListener('click', 
function (event){
    event.preventDefault();
    console.log("CLICK")     
    let local = []
    localStorage.getItem('carrinho')

  const acessorioValue = acessorio[0].value
  console.log(acessorioValue)

  const precoValue = precoAcessorio[0].value
  console.log(precoValue)

  const nomeValue = nomeAcessorio[0].value
  console.log(nomeValue)

  local.push({acessorioValue,precoValue,nomeValue})

  localStorage.setItem('carrinho',JSON.stringify(local))
  }
  )


  // pegar o valor como get item
  //na tela de carrinho
  //realizar a soma de calculo no botao de quantidade
  // input de alterar
  // fazer a mesma coisa no de mais e menos no do valor total colocar no input 

  

  




  