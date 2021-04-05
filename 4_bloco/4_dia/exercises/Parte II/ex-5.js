//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repetido(numeros) {
    let contNumero = 0;
    let contRepetido = 0;
    let indexNumeroRepetido = 0;

    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];



    function techList(anyArray,name) {
        let array = anyArray.sort();
        let toLearn = [];
        for(let indice in array) {
        toLearn[indice] = { tech: array[indice], name: name };
        }
        return toLearn;
}
