const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = (author) => {
  const { id, fistName, middleName, lastName } = author;

  const fullName = [fistName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    fistName,
    middleName,
    lastName,
    name: fullName,
  }
}

// Transforma o nome dos campos de snake_case para camelCase
const serialize = (author) => ({
  id: author.id,
  fistName: author.fist_name,
  middleName: author.middle_name,
  lastName: author.last_name
});

// Busca todos os autores
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};
