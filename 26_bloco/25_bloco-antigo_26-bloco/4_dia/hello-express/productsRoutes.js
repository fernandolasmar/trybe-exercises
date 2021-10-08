const router = require('express').Router();

const dbProducts = [
  { id: 1, name: 'Xiaomi Mi A2', price: 1100.0 },
  { id: 2, name: 'Placa de video geforce 1060 3G', price: 2000.0 },
  { id: 3, name: 'Kit corsair Teclado, mouse, fone de ouvido', price: 700.0 },
  { id: 4, name: 'Monitor LG 22 Full HD', price: 700.0 },
  { id: 5, name: 'Processador i3 9-Geração', price: 600.0 },
  { id: 6, name: 'Memoria ram 8G ddr4 2666MHz CL16', price: 240.0 },
];

const validateParams = (req, res, next) => {
  const { id, name, price } = req.body;

  if(!id) return res.status(400).json({ message: 'Você presica informar o ID'});
  if(!name) return res.status(400).json({ message: 'Você presica informar o NAME'});
  if(!price) return res.status(400).json({ message: 'Você presica informar o PRICE'});
  next()
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if(token !== 'testando') return res.status(400).json({ message: 'Você não tem autorização'});
  next()
};

// Busca todos os produtos
router.get('/', (req, res) => {
  res.status(200).json(dbProducts);
});

// Cadastra produto
router.post('/', validateToken, validateParams, (req, res) => {
  const { id, name, price } = req.body;
  dbProducts.push({ id, name, price });
  res.status(200).json({ message: 'Produto cadastrado com sucesso!'});
});

// Atualiza os produtos
router.put('/', validateToken, validateParams, (req, res) => {
  const { id, name, price } = req.body;
  const indexProduct = dbProducts.findIndex((p) => p.id === Number(id));

  dbProducts[indexProduct] = { ...dbProducts[indexProduct], name, price };
  res.status(200).json({ message: 'Produto atualizado com sucesso!'});
});

// app.get('/products:id', (req, res) => {
//   const { id } = req.params;
//   // console.log(req.params);

//   const dados = dbProducts.find((p) => p.id === Number(id));

//   if(!dados) return res.status(404).json({ message: 'Não encontrei seu produto'});

//   res.status(200).json(dados);
// });

// Exemplo de tratamento de erro
/*
const express = require('express');

const app = express();


app.use(express.json())


const fs = require('fs').promises;

app.get('/books', async (_req, res, next) => {
  try {
    const fileContent = await fs.readFile('./book.json');
    const books = JSON.parse(fileContent);
    return res.status(200).json(books);
  } catch (error) {
    next(error)
  }

});

app.use((error, _req, res, _next) => {
  if(error.code == 'ENOENT')
    return res.status(500).json({ message: "Ocorreu algum erro inesperado, tente mais tarde!" })

  res.status(500).json({ message: "Ocorreu um erro inesperado" })
})

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`)); 
*/

module.exports = router;
