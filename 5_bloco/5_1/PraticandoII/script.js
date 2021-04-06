var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";

document.getElementById('page-title').innerText = '300';

document.getElementById('second-paragraph').innerText = 'Filme muito bom, vi por varias vezes.';

document.getElementById('subtitle').innerText = 'Opinião sobre o filme:';

/*
1-Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
2-Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
3-Por fim, recupere o subtítulo e altere-o também.
*/

let twoParagraphs = document.getElementsByClassName('two-paragraphs');
for (let i = 0; i < twoParagraphs.length; i += 1) {
      twoParagraphs[i].style.color = 'white'
      twoParagraphs[i].style.backgroundColor = 'black';
}
let texto1 = document.querySelector('p'); //retorna apenas o 1 paragrafo
      texto1.style.backgroundColor = 'orange';
  
/*
1-Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.
2-Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
3-Altere algum estilo do primeiro deles.
4-Recupere o subtítulo pela tag.
*/