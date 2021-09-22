//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(caracteres) {
    let maiorNome = caracteres[0];
    for (let indice in caracteres) {
        if (maiorNome.length < caracteres[indice].length) {
            maiorNome = caracteres[indice];
        }
    }
    return maiorNome;
} 
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'cairo', 'Joana']));
