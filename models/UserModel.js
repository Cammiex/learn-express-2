import db from '../config/database.js';

const usersTable = async () => {
  try {
    const [checkTable] = await db.query("SHOW TABLES LIKE 'users'");
    if (checkTable.length === 0) {
      await db.query(` CREATE TABLE users(
        id BIGINT PRIMARY KEY UNIQUE AUTO_INCREMENT NOT NULL,
        email VARCHAR(100) NOT NULL,
        fullname VARCHAR(100) NOT NULL,
        gender ENUM('L', 'P') DEFAULT NULL,
        update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);
      console.log('Table Created Successfully.');
    }
  } catch (error) {
    console.log(error);
  }
};

export default usersTable;
