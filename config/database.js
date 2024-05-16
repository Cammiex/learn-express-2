import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  database: 'express',
  user: 'root',
  password: '',
});

db.getConnection()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection failed:' + err));

export default db;
