// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// 1-Utilize template literals para que a chamada console.log(oddsAndEvens);
//  retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// 2-Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: 
//  É possível realizar uma função que ordene qualquer array de números.

// Ex II
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newLista = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sorteLista = newLista();

console.log(`Os números ${sorteLista} se encontram ordenados de forma crescente!`);

// Array sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newLista2 = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = newLista2(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

//Array sort 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);