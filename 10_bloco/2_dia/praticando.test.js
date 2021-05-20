// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });
// ==========================================>

// test("Não deveria passar!", done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//     done();
//   }, 500);
// });
// ==========================================>

// const SumNumbers = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500)
// }

// test('Testando SumNumbers, soma 5 mais 10', done => {
//   SumNumbers(5, 10, (result) => {
//     expect(result).toBe(15);
//     done();
//   });
// })
// =============================================>

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );
// ===============================================================>

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

// describe('Quando o tipo do animal existe', () => {
//   test('Retorne a lista de animais', () => {
//     expect.assertions(2);
//     return getListAnimals('Dog').then(listDogs => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     });
//   });
// });
// ============================================================>

// Primeiro criamos o describe, onde os testes serão executados.
// Agora, adicione a função a ser testada. Como ela retorna uma Promise , é necessário adicionarmos o .then para pegar o seu resultado.
// Agora adicione os testes e os execute.
// Verifique se deu algum falso-positivo, mude o nome do Dorminhoco para Bob . Observe:
// O teste continuou passando sem encontrar o erro (o que não era o esperado), o que indica que ele está com um falso-positivo.
// Para resolver esse problema, é necessário inserir um return antes da função e, em seguida, adicionar a quantidade de expect esperadas por meio do comando expect.assertions(2) .
// Agora o teste conseguiu identificar o erro, retornando dois erros. Um dos erros é o que esperava Bob , mas recebeu o Dorminhoco . Como o Jest apenas recebeu 1 assertion, mas eram esperados 2 , surge o segundo erro no nosso teste. Agora, desfaça as alterações para o teste voltar a funcionar. Como esse teste conseguiu encontrar o erro, fica claro que o problema de resultados falso-positivos foi resolvido.
// Se quiser, remova o expect.assertions(2) e veja que o teste passa!
// Essa promise possui dois casos: quando ela funciona, ocorre o resolve e, no erro, ocorre o reject . Como o resolve já foi testado, faltam apenas os testes do erro.
// O código abaixo testa, exatamente, o caso de erro.


// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => {
//     return getListAnimals('Dog').then(listDogs => {
//     expect(listDogs[0].name).toEqual('Dorminhoco');
//     expect(listDogs[1].name).toEqual('Soneca');
  
//     });
//   });
// });

// Como o array Animals não possui nenhum Lion (tipo inserido no teste), será disparada a reject , que retornará um objeto com uma chave error com o valor Não possui esse tipo de animal. . A diferença entre esse teste e os outros é o .catch no lugar do .then . O .catch trabalha o resultado da promise quando ocorre um reject ; já o .then , quando ocorre o resolve .
// describe('Quando o tipo do animal, não existe', () => {
//   test('Retorne a lista de animais', () => {
//     return getListAnimals('Lion').catch(error =>
//       expect(error).toEqual({ error: "Não possui esse tipo de animal." })
//     );
//   });
// });

// Para testar o código Async/Await , será usado o mesmo código anterior, mas com pequenas mudanças. Observe:
// test('Testando com async/await', async () => {
//   const listDogs = await getListAnimals('Dog');
//   expect(listDogs[0].name).toEqual('Dorminhoco');
//   expect(listDogs[1].name).toEqual('Soneca');
// });

// Perceba que a diferença entre elas é o async . Como existe uma promise a ser testada, é necessário o uso do await , para que o teste espere a finalização da promise e, em seguida, execute o teste remanescente. A variável listDogs recebe o retorno da promise e executa os testes.
// Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch .
test('Testando com async/await, testando o reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});
