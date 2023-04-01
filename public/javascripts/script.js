   let cep = document.getElementById('cart-cep')
             
 async function calcularFrete  ()  {
  
    const valoresFretePorRegiao = {
        'SP' : 'R$ 19,90',
        'RS' : 'R$ 39,90',
        'Outros' : 'R$ 40,00' 
      
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




 

   
  // try {
  //   const response = await fetch(url, {mode: "cors", method: 'get'});
  //   const data = await response.json();
  //   const regiaoConhecida = data.uf in valoresFretePorRegiao;
  //   const valorFrete = valoresFretePorRegiao[regiaoConhecida ? data.uf : 'Outros'];

  //   const total = calcularTotal(produto, valorFrete);

  //   res.render('carrinho', {frete: valorFrete, total});
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