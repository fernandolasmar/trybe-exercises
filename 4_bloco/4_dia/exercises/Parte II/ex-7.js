//Crie uma função que receba uma string word , e outra, uma string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimDaPalavra(palavra, fimDaPalavra) {
    palavra = palavra.split('');
    fimDaPalavra = fimDaPalavra.split('');
    controle = true;
    for (let index = 0; index < fimDaPalavra.length; index += 1) {
        if (palavra[palavra.length - fimDaPalavra.length + index] != fimDaPalavra[index]) {
            controle = false;
        }
    }
    return controle;
}
console.log(verificaFimDaPalavra('trybe', 'be'));
console.log(verificaFimDaPalavra('joaofernando', 'fernan'));
