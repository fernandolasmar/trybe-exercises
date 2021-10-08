const connection = require('./mongodbConnection');
// importando 
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ _id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    _id,
    firstName,
    middleName,
    lastName,
    name: fullName
  }
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
};

// Busca todos os autores do banco de dados
// usando mysql
// const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
// return result.map(serialize).map(getNewAuthor);
const getAll = async () => {
  // usando mongodb
  return connection()
    // find para buscar toda coleção, toArray para transformar em um array
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, firstName, middleName, lastName }) => {
        return getNewAuthor ({
          _id,
          firstName,
          middleName,
          lastName
        })
      })
    })
}

// Busca autor pelo id mysql
// Repare que substituímos o id por `?` na query.
// Depois, ao executá-la, informamos um array com o id para o método `execute`.
// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
// const queryId = 'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?'
// const [authorData] = await connection.execute(queryId, [id]);
const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))
  // trantando se o id não existir mysql
  // if (authorData.length === 0) return null;
  if (!authorData) return null;

  // // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID. mysql
  // const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  const { _id, firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    _id,
    firstName,
    middleName,
    lastName
  });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

// mysql
// connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
//   [firstName, middleName, lastName],
// );
const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
}

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}
