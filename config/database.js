import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const db = mysql.createPool({
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
});

db.getConnection()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection failed:' + err));

export default db;
