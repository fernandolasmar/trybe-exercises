const connection = require('./mysqlConnection');

// Fazer uma conexao e buscar todos os usuarios
const getAllCharacters = async () => {
  const [result] = await connection.execute('SELECT * FROM characters');
  return result;
};

// Add character
const insertCharacter = async (name, cartoon) => {
  const query = 'INSERT INTO characters (name, cartoon) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, cartoon]);

  // Para tratar a resposta do cadastro
  const serialized = {
    id: result.insertId,
    name,
    cartoon
  }
  return serialized;
};

module.exports = {
  getAllCharacters,
  insertCharacter,
};
