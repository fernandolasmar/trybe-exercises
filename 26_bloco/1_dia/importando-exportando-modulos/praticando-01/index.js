// O uso desse nosso módulo anterior (brlValue) se daria da seguinte forma:
// exportando o modulo para dentro da variavel
// Perceba que podemos dar o nome que quisermos para a função depois que a importamos, independente de qual o seu nome dentro do módulo.
// ex:01
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7

// ex02: Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:
const brlValue = require('./brlValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 53.7

// ex:03 podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:
const { brl, usdToBrl } = require('./brlValue');

console.log(`Valor do dólar: ${brl}`);
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`);
