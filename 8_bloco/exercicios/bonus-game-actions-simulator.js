// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) 
// e o valor de strength * weaponDmg (dano máximo).
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o 
// dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) 
// e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso 
// o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") 
// e a mana gasta é 0

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// 1
const dragonAttack = () => {
  const minAttack = 15;
  const maxAttack = dragon.strength; // pegar o valor 50 de dragon    
  const dragonDmg = Math.floor(Math.random() * (maxAttack - minAttack) + minAttack);
  return dragonDmg;
}

console.log(dragonAttack());

// 2
const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

console.log(warriorAttack(warrior));

// 3
