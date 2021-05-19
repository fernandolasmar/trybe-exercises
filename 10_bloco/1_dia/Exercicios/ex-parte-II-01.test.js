const { encode, decode } = require('./ex-parte-II-01');

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte apenas a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte apenas a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte apenas a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', ()=> {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('cansado').length).toEqual(7);
  });
});