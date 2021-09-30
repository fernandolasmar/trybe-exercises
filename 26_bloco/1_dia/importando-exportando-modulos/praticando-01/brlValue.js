// Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports , atribuindo a ela o valor que desejamos exportar:
// exportando uma função de forma que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

// exportar tanto a função de conversão quanto o valor do dólar (a variável brl ), dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:
module.exports = { 
  brl,
  usdToBrl,
};

