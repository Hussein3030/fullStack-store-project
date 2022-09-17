import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3305',
  database: 'employee_database',
});

export default db;