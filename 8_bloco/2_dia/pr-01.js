const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
});


const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
 

  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);



const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});


arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
});

// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF , pode ser, .find , .some , .every ;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); 
// - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .

meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});


const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.


const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.
emailListInData.forEach((item, posicao, array) => {
  showEmailList(item);
  console.log(`Sua posição é: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é ${array.length}`);
});


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); 


const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
