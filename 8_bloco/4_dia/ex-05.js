// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((acc2, curr2) => {
      if (curr2 === 'a' || curr2 === 'A')
      return acc2 + 1;
      // console.log(acc2 + 1);
      // console.log(acc2);
      return acc2;
    }, 0),
  0);
}
console.log(containsA(names));

assert.deepStrictEqual(containsA(), 20);

// O método split () é usado para dividir uma string em uma matriz de substrings e retorna a nova matriz.
