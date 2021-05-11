// é um array de objetos que representa os gastos de uma pessoa no mês.
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

// representa o quanto esta pessoa recebeu neste mesmo mês.
const myIncome = 1000;

// função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.
// o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, 
// ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos 
// contidos no array de objetos myExpenses , e retornará este valor para a constante totalExpenses .
const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};
// -------------------------------------------------------->

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);


/*
Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .
Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.
*/

// -------------------------------------------------------->

/*
1- No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. 
Complete a função getUser de forma que ela receba uma outra função como parâmetro 
para que possa realizar as operações abaixo sobre a pessoa retornada.
*/

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser

// -------------------------------------------------------->

/*
2- No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono 
e imprime dados de uma pessoa qualquer depois de um certo tempo. 
Complete a função getUser de forma que ela receba um callback para que possa realizar 
as operações abaixo sobre a pessoa.
*/

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo