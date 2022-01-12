const express = require('express');
const bodyParser = require('body-parser');

const AuthorController = require('./controllers/authorController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/authors', AuthorController.listAuthors);

app.get('/authors/new', AuthorController.newAuthor);

app.get('/authors/:id', AuthorController.showAuthor);

app.post('/authors', AuthorController.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
