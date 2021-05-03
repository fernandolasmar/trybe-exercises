const newEmployees = (usuarios) => {
  const employees = {
    id1: usuarios('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: usuarios('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: usuarios('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const usuarios = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@betrybe.com`};
}

console.log(newEmployees(usuarios));

//  toLowerCase = { id1: 'pedro guerra', id2: 'luiza drumond', id3: 'carla paiva' }
//  split {
//   id1: [ 'pedro', 'guerra' ],
//   id2: [ 'luiza', 'drumond' ],
//   id3: [ 'carla', 'paiva' ]
// }
//   join { id1: 'pedro_guerra', id2: 'luiza_drumond', id3: 'carla_paiva' }