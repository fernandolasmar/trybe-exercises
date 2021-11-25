const { default: axios } = require('axios');

const enderecos = {
  casa: {
    cep: '30.530-290',
  },
  casaAline: {
    cep: '30.530-250'
  }
}

async function consultaCEP(endereco, service) {
  const { cep } = enderecos[`${endereco}`];
  
  const valida = validaCEP(cep);

  let cepTratado;

  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    service(cepTratado);    
  }
}

async function brasilAPI(cep) {
  const urlBrasil = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  const request = await axios.get(urlBrasil);
  console.log('Brasil API -->', request.data)
}

async function viaCEP(cep) {
  const urlVia = `https://viacep.com.br/ws/${cep}/json/`;

  const request = await axios.get(urlVia);
  console.log('Via CEP -->', request.data)

}

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}

consultaCEP('casa', brasilAPI);
consultaCEP('casa', viaCEP);
consultaCEP('casaAline', brasilAPI);
consultaCEP('casaAline', viaCEP);

