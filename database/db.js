const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || undefined,
  database: 'HRR43_FEC'
});
connection.connect();

module.exports = connection;