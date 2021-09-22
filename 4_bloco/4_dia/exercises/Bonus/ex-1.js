/*(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
*/

function romanos(roma) {
    let romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arrayNumeros = [];
    let resultado = 0;
    
    for (let indice in roma) {
        arrayNumeros[indice] = romanos[roma[indice]];
    }
    for (let indice in arrayNumeros) {
        if (arrayNumeros[indice] < arrayNumeros[indice + 1]) {
            arrayNumeros[indice + 1] = arrayNumeros[indice + 1] - arrayNumeros[indice];            
        } else {
            resultado += arrayNumeros[indice];
        }
    }
    return resultado;    
}
console.log(romanos(MMXVIII));