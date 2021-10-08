const express = require('express');

const app = express();

const recipes = [
  {id: 1, name: 'lasanha', price: 40.0, waitTime: 30},
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// app.get('/recipes', (req, res) => {
//   res.json(recipes);
// });

// app.get('/recipes/:id', (req, res) => {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === parseInt(id)); // O find()método retorna o valor do elemento da matriz que passa em um teste (fornecido por uma função).

//   if (!recipe) return res.status(404).json({ message: 'Recipe not found'});
//   res.status(200).json(recipe);
// });

// Crie uma array drinks com os seguintes obejtos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
app.get('/drinks', (req, res) => {
  res.json(drinks);
});

// Crie uma rota GET /drink/:id para retornar uma bebida pelo id .
// app.get('/drinks/:id', (req, res) => {
//   const { id } = req.params;
//   const drink = drinks.find((d) => d.id === parseInt(id));

//   if (!drink) return res.status(404).json({ message: 'Drink not found'});
//   res.status(200).json(drink);
// });

// rota para buscar uma lista de receitas, filtrando pelo nome
// para testar use: http://localhost:3000/recipes/search?name=Macarrão
// Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice e modifique o filter para trazer apenas as receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) || r.price >= parseInt(minPrice)); // O includes()método retorna true se uma string contém uma string especificada, caso contrário false.
  res.status(200).json(filteredRecipes);
});

// Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.
app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta http://localhost:3000');
});
