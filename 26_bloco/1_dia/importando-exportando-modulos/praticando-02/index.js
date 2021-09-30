const teste01 = require('./test01');
const teste02 = require('./test02');

module.exports = { teste01, teste02 };


// Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:
// Repare que o nome da variável pode ser qualquer um que escolhermos. O que importa mesmo é o nome do pacote que passamos como parâmetro para o require .
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');