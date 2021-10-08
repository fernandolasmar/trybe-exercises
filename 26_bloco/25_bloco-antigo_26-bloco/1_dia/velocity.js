const { questionInt } = require('readline-sync');

function calculateAverageSpeed() {
  const distancia = questionInt('Distancia percorrida? ');
  const tempo = questionInt('Tempo gasto? ');
  
  const averageSpeed = (distancia / tempo);
  
  console.log(`Velocidade média é ${averageSpeed}`);

}

calculateAverageSpeed();
