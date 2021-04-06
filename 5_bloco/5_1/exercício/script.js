   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1-Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2-Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3-Crie uma função que mude a cor do quadrado vermelho para branco.
 4-Crie uma função que corrija o texto da tag <h1>.
 5-Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6-Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function changeText() {
       let paragraph = document.getElementsByTagName('p')[0]; 
       paragraph.innerHTML = 'Me vejo sendo um grande profissional e reconhecido na área de desenvolvimento web';
 }
 changeText();

 function changeTheColor() {
       let squareColor = document.getElementsByClassName('main-content')[0];
       squareColor.style.background = 'rgb(76,164,109)';
 }
 changeTheColor();

 function halfSquare() {
       let mediumColor = document.getElementsByClassName('center-content')[0];
       mediumColor.style.background = 'white';
 }
 halfSquare();

 function correct() {
       let text = document.getElementsByTagName('h1')[0];
       text.innerHTML = 'Exercício 5.1 - JavaScript';
 }
correct();

function capital() {
      let text = document.getElementsByTagName('p')[0];
      text.innerHTML = text.innerHTML.toUpperCase();  // deixa a frase em maiúscula.
}
capital();
 
function allParagraphs() {
      let paragraph = document.getElementsByTagName('p');
      for (let i = 0; i < paragraph.length; i += 1) {
            console.log(paragraph[i].innerHTML);
      }
}
allParagraphs();
