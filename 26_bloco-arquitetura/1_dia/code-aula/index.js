const bodyParser = require('body-parser');
const express = require('express');
const charactersRoutes = require('./routes/charactersRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// app.use(express.json());

app.use(charactersRoutes);

app.listen(PORT, () => console.log(`Servidor online ${PORT}`));
