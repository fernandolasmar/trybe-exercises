const { questionInt, questionFloat } = require('readline-sync');

function classificaoImc(imc) {
  
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';    
  }
  
  if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  }
  
  if (imc >= 25 && imc <= 29.9) {
    return 'Acima do peso (sobrepeso)';
  }
  
  if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau I';
  }
  
  if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau II';
  }
  
  return 'Obesidade graus III e IV';

}

function calculaImc() {
  const peso = questionFloat('Qual o seu peso? ');
  const altura = questionInt('Qual a sua altura? (exemplo: 170) ');
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = peso / (altura * altura / 100) * 100;  
  const resultadoClassificaoImc = classificaoImc(imc)
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Sua classificação é ${resultadoClassificaoImc}`)
}

calculaImc();
