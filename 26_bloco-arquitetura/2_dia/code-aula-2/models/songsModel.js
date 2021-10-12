// importando arquivo de conexão
const connection = require('./connection');

// Buscar todas as musicas
const getAll = async () => {
  const db = await connection()
  return db.collection('songs').find().toArray();
};

// Verifica se musica já existe
const songExists = async ({ name }) => {
  const db = await connection()
  const song = await db.collection('songs').findOne({ name: name });

  return song !== null;
};

// ADD nova musica
  const createSong = async ({ name, album }) => {
    const db = await connection()
    const insertNewSong = await db.collection('songs').insertOne({ name, album });
    return { _id: insertNewSong.insertedId, name, album };
  }

module.exports = {
  getAll,
  songExists,
  createSong,
};
