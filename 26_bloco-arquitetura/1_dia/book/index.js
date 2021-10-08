const express = require('express');
const app = express();
const PORT = 3000;

const books = require('./models/books');

// app.get('/books', async (req, res) => {
//   const resultBooks = await books.getAll();

//   res.status(200).json(resultBooks);
// });

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const resultBooks = (author_id) ? await books.getByAuthorId(author_id) : await books.getAll();
  res.status(200).json(resultBooks); 
});

app.listen(PORT, () => console.log(`Online na porta: ${PORT}`));
