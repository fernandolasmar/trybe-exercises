// importando modulo mysql promise
const mysql = require('mysql2/promise');

// estanciando um objeto connection
const connection = mysql.createPool({
  user: 'fernando',
  password: 'trybe7410',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;