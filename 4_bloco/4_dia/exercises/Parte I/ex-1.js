let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    
  };
  console.log('Bem-vinda,'  + info.personagem);

  info.recurrent = 'Sim';

  console.log(info);

  for (let key in info) {
    console.log(key);
}    
  for (let description in info) {
      console.log(info[description]);
  }
  





/*  1-Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.       
    2-Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
    3-Faça um for/in que mostre todas as chaves do objeto.
    4-Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
*/