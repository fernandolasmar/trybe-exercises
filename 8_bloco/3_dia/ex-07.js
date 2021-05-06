const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((livro) => (livro.author.name.split(' ')
  .filter((letra) => letra.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName(books));

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
// Dica: cada inicial termina com um ponto.

// Se encontrar um elemento da matriz onde a função retorna um valor verdadeiro , 
// find () retorna o valor desse elemento da matriz (e não verifica os valores restantes)

// O método split () é usado para dividir uma string em uma matriz de substrings e retorna a nova matriz.

//O endsWith()método determina se uma string termina com os caracteres de uma string especificada.
