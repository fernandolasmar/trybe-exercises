const { questionInt, question } = require('readline-sync');

function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
};

function guessingGame() {
  const number = randomNumber(0, 10);

  const playerNumber = questionInt('Jogo de adivinhação! Escolha um número entre 0 e 10: ')
  if (playerNumber === number) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
};

guessingGame();

function playAnother() {
  const playAgain = question('Deseja jogar novamente? (s/n)');
  // console.log(playAgain);

  if (playAgain.toLowerCase() !== 's') return console.log('Que pena, até a próxima');

  guessingGame();
  playAnother();
};

playAnother();
