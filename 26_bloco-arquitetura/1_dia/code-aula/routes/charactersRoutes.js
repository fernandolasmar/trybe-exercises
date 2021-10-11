const router = require('express').Router();

// importando a função e conectando com mysql
// const { getAllCharacters, insertCharacter } = require('../models/charactersModel');

// importando a função e conectando com mongodb
const { getAllCharacters, insertCharacter } = require('../models/charactersModelMongodb');

// busca characters
router.get('/characters', async (_req, res) => {
  const data = await getAllCharacters();

  res.status(200).json(data);
});

// adiciona um novo character
router.post('/characters', async (req, res) => {  
  try {
    const { name, cartoon } = req.body;
    const data = await insertCharacter(name, cartoon);
  
    res.status(200).json(data);    
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar'});
  }

});

module.exports = router;
