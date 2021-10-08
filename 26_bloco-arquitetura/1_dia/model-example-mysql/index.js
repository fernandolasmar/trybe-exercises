const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const author = require('./models/author');

// para conseguir usar o que é passado pelo body, transformando em json
app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authors = await author.findById(id);
  // tratando erro
  if (!authors) return res.status(404).json({ message: 'Not found '});

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await author.create(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.listen(PORT, () => console.log(`Online na porta: ${PORT}`)); // http://localhost:3000/authors
