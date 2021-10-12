const express = require('express');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songRoutes');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use(songRoutes);

app.listen(PORT, () => console.log(`Servidor roda aqui -> ${PORT}`));
