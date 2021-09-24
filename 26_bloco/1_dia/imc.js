const peso = 70;
const altura = 1.69;

function calculaImc () {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const resultadoImc = (peso / (altura * altura) ).toFixed(2);
  console.log(`IMC é ${resultadoImc}`);
}

calculaImc();
