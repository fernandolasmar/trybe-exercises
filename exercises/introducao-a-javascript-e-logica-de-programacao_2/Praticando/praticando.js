let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); //Mostra o tamanho do array

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); // mostra a posição tomar café


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);  // mostra a posição brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no final
console.log(tasksList);

tasksList.unshift("Testando");  // adiciona mais uma tarefa no inicio
console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');  // indexof() usado para procurar o indice de um array
console.log(indexOfTask);


let numeros = [1,2,3,4,5];
for(let numero of numeros) {  // permite criar loops em objetos iteráveis como strings, arrays, entre outros
  console.log(numero);
}

let word = 'Hello';
for (let letter of word) {  //permite iterar os valores das propriedades, nos retornando os números dentro do array
  console.log(letter);
}

let arrOfNumbers = [10,20,30];
for (let sum of arrOfNumbers) { //somar um valor a cada elemento do array e retorná-los
  sum += 1;
  console.log(sum);
  
}
console.log(arrOfNumbers);