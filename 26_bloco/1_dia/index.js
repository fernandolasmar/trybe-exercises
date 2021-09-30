const { questionInt } = require('readline-sync');

function selectScript() {
  const script = questionInt(
    `Qual script deve ser executado?
    1- imc
    2- velocidade
    3- sorteio
  `);

  switch(script) {
    case 1:
      require('./imc');
      break;
    case 2:
      require('./velocity');
      break;
    case 3:
      require('./sorteio');
      break;
    default:
      console.log('Script não encontrado');  
  }
};
selectScript();