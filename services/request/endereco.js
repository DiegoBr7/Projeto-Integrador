const axios = require('axios');
const cepApi = require('../cepApi')

module.exports = {
    async buscarEnderecoPorCep (cep){
        const {data} = await axios({
            ...cepApi,
            method:'get',
            url:`/json/${cep} `
        })

        if (!data) throw new Error('Não foi possivel consultar a api de cep!');
        return {
           cep:data.cep ,
           uf:data.uf,
           cidade:data.localidade,
           bairro:data.bairro,
           

           
        }
    }
}