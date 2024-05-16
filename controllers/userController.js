import db from '../config/database.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const sql = 'SELECT * FROM users';
    const [results] = await db.query(sql);
    res.status(200).json({
      payload: {
        msg: 'Berhasil mengambil semua data user.',
        data: results,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res) => {
  try {
    const { email, fullname, gender } = req.body;
    const [results] = await db.query(
      `INSERT INTO users (email, fullname, gender) VALUES ('${email}', '${fullname}', '${gender}' )`
    );
    res.status(200).json({
      payload: {
        msg: 'User Berhasil Ditambahkan',
        data: {
          id: results.insertId,
          email: email,
          fullname: fullname,
          gender: gender,
        },
      },
    });
  } catch (error) {
    console.log(console.error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const { email, fullname, gender } = req.body;
    const [
      results,
    ] = await db.query(
      `UPDATE users SET email = ?, fullname = ?, gender = ? WHERE id = ?`,
      [email, fullname, gender, userId]
    );
    console.log(results);
    res.status(201).json({
      payload: {
        message: 'berhasil mengubah data user dengan id : ' + userId,
        datas: {
          id: userId,
          email: email,
          fullname: fullname,
          gender: gender,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const [results] = await db.query(`DELETE FROM users WHERE id = ?`, [
      userId,
    ]);
    console.log(results);
    res.status(200).json({
      payload: {
        message: 'berhasil menghapus data user',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
