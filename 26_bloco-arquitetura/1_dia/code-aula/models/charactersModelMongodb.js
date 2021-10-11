const connection = require('./mongodbConnetion');

// Fazer uma conexao e buscar todos os usuarios
const getAllCharacters = async () => {
  return connection().then((db) => db.collection('characters').find().toArray());

};

// Add character
const insertCharacter = async (name, cartoon) => {
  connection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => { id: result.insertedId, name, cartoon });
};

module.exports = {
  getAllCharacters,
  insertCharacter,
};
