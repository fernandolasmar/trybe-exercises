const express = require('express');

const AuthorController = require('./controllers/authorController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/authors', AuthorController.listAuthors);

app.get('/authors/:id', AuthorController.showAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
