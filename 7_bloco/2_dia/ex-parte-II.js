const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // console.log(allLessons);

  // 1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (objeto, key, value) => {
  objeto[key] = value;
};
addNewKey(lesson2, 'turno', 'manhã');
 
  // 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (objeto) => Object.keys(objeto);

console.log(listKeys(lesson1));
console.log('----------------------------listando as chaves');
  
  // 3-Crie uma função para mostrar o tamanho de um objeto.
const sizeObjeto = (objeto) => Object.keys(objeto).length;

console.log(sizeObjeto(lesson1));
console.log('-----------------------------Tamanho do objeto');

  // 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const size = (objeto) => Object.values(objeto);

console.log(size(lesson1));
console.log('-----------------------------Valores do objeto'); 

  // 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});   

console.log(allLessons);
console.log('----------------------------------------Aulas');
  // 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(totalStudents(allLessons));
console.log('--------------------------Total de estudantes');

  // 7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const valueKey = (objeto, number) => Object.values(objeto)[number];

console.log(valueKey);
console.log('-------------------------------valor da chave');

  // 8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (objeto, key, value) => {
  const res = Object.entries(objeto);
  let resFor = false;
  for (let index in res) {
    if (res[index][0] === key && res[index][1] === value) resFor = true;
  }
  return resFor;
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'));
console.log('-----------------------------------verifica par');


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes. 
// Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'));
const getNumberOfStudentsMath = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    if (objeto[array[index]].materia === 'Matemática') {
      total += objeto[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));
console.log('----quantos estudantes assistiram às aulas de matemática');
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

const getInfo = (objeto, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(objeto);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].numeroEstudantes);
    }
  }
  return {lessons: allLessons, estudantes: allStudent};
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
}
console.log(createReport(allLessons, 'Maria Clara'));
console.log('-----------------relatorio----------------------------------------Fim');





/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'


//console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

