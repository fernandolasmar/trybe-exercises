// importando
const express = require('express');

const app = express();

const dbProducts = [
  { id: 1, name: 'Xiaomi Mi A2', price: 1100.0 },
  { id: 2, name: 'Placa de video geforce 1060 3G', price: 2000.0 },
  { id: 3, name: 'Kit corsair Teclado, mouse, fone de ouvido', price: 700.0 },
  { id: 4, name: 'Monitor LG 22 Full HD', price: 700.0 },
  { id: 5, name: 'Processador i3 9-Geração', price: 600.0 },
  { id: 6, name: 'Memoria ram 8G ddr4 2666MHz CL16', price: 240.0 },
];

app.get('/products:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);

  const dados = dbProducts.find((p) => p.id === Number(id));

  if(!dados) return res.status(404).json({ message: 'Não encontrei seu produto'});

  res.status(200).json(dados);
});

app.post('/', (req, res) => res.send('POST'));

app.put('/', (req, res) => res.send('PUT'));

app.delete('/', (req, res) => res.send('DELETE'));

app.listen(3000, () => console.log('Servidor rodando na URL http://localhost:3000'));
