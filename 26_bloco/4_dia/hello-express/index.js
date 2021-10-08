// importando
const express = require('express');

const productsRoutes = require('./productsRoutes');

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.listen(3000, () => console.log('Servidor rodando na URL http://localhost:3000'));
