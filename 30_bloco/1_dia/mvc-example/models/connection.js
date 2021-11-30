const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fernando',
  password: 'trybe7410',
  database: 'mvc_example'
})

module.exports = connection;
