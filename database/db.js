const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'about'
});
connection.connect();

module.exports = connection;