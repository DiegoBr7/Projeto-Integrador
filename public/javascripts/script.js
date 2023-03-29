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
      const regiaoConhecida = uf in valoresFretePorRegiao;
      const valorFrete = regiaoConhecida [regiaoConhecida? endereco.uf : 'Outros'] 
      let frete = document.getElementById('frete')
      frete.innerText = valorFrete

    } catch (error) {
   alert (error)
    }
  }