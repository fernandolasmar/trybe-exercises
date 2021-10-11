// Importando e conectando com banco de dados
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'fernando',
  database: 'aula_bloco_26_1',
  password: 'trybe7410',
  port: 3306
});
