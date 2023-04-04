   let cep = document.getElementById('cart-cep')
             
 async function calcularFrete  ()  {
  
    const valoresFretePorRegiao = {
        'SP' : '19.90',
        'RS' : '39.90',
        'Outros' : '40.00' 
      
      }

    try {

      const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`,
      {mode: "cors" , method:'get'}
      );
      const data = await response.json();
      console.log('data',data)

      const regiaoConhecida = data.uf in valoresFretePorRegiao;
      console.log('regiaoConhecida',regiaoConhecida)

      const valorFrete = valoresFretePorRegiao [regiaoConhecida? data.uf : 'Outros'] 
      console.log('valorFrete',valorFrete)

      let frete = document.getElementById('frete')
      console.log('frete',frete)
      
      frete.innerText = valorFrete
      calcularTotal()
    } catch (error) {
      console.log('error',error)
   alert (error)
    }
  }

  const quant = document.getElementsByClassName('quant')[0];
  const mais = document.getElementById('cart-plus-button');
  const menos = document.getElementById('cart-minus-button');

  menos.addEventListener('click', () => {
    let quantidade = parseInt(quant.innerText);
    if (quantidade > 1) {
      quantidade--;
      quant.innerText = quantidade;
    }
  });

  mais.addEventListener('click', () => {
    let quantidade = parseInt(quant.innerText);
    quantidade++;
    quant.innerText = quantidade;
  });

// ------------------------------------------------------------------------------------------------
let carrinho = JSON.parse(localStorage.getItem('carrinho'));
const cartProdutos = document.querySelector('.cart-products');

carrinho.forEach(function(item) {    
  const productDiv = document.createElement('div');
  productDiv.classList.add('add-products-info');
  productDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="cart-product-description">
      <p>${item.name}</p>
      <p>Marca:${item.brand}</p>
      <p>Em estoque</p>
    </div>
    <div class="cart-product-quantity">
      <div class="cart-add-remove">
        <button type="button" id="cart-minus-button">−</button>
        <span class="quant">${item.quantity}</span>
        <button type="button" id="cart-plus-button">+</button>
      </div>
      <a class="cart-remove-item" href="#"><span>Remover</span></a>
    </div>
    <div class="cart-product-price">
      <p> R$ ${item.price} </p>
    </div>
  `;
  cartProdutos.appendChild(productDiv);
});
  
  

  
  
 
// ----------------------------------------------------------------------------------------------------------

function calcularTotal (){
  
  const quantidadeFrete = document.getElementById('frete')
  
  const quantidadePreco = document.getElementById('preco-produto')
  
  const totalProduto = document.getElementById('total-produto')

  const frete = parseFloat(quantidadeFrete.innerText)||0;

  const preco = parseFloat(quantidadePreco.innerText);

  const total = frete + preco;

  totalProduto.innerText = total.toFixed(2)
}

calcularTotal()





































  // try {
  //   const response = await fetch(url, {mode: "cors", method: 'get'});
  //   const data = await response.json();
  //   const regiaoConhecida = data.uf in valoresFretePorRegiao;
  //   const valorFrete = valoresFretePorRegiao[regiaoConhecida ? data.uf : 'Outros'];

  //   const total = calcularTotal(produto, valorFrete);

  //   res.render('item', {frete: valorFrete, total});
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send('Erro ao calcular o frete');
  // }

  

// botao no front funcoes
// ou usar o back-end adicionar um produto no carrinho
// fazer o mesmo script da tela para adicionar mais itens
// trazer os produtos que estao na tabela para a pagina
// crud de produtos para a pagina carrinho
// calculadora pelo javascript pelo front
// contabilizar a quantidade de produto e o preco
// finalizar compra que ira enviar um post com todos os dados do carrinho