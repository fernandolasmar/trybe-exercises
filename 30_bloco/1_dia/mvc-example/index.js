const express = require('express');

const AuthorController = require('./controllers/authorController');

const app = express();

app.get('/authors', AuthorController.listAuthors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
