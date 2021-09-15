// 01-Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
db.movies.find(
  { category: { $all: ["action", "adventure"] } }
);

// 02-Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
db.movies.find(
  { category: { $all: ["action"] }, imdbRating:  { $gt: 7 }}  
).pretty();

// 03-Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
db.movies.updateOne(
  { title: "Batman"},
  { $push: { 
      ratings: {
        $each: [85, 100, 102, 105]
      }
    }
  }
);
