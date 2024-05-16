import path from 'path';
import upload from '../middleware/multer.js';

export const uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({
        msg: err.message,
      });
    }
    res.status(201).json({
      payload: {
        msg: 'Berhasil mengupload file.',
        file: req.file,
      },
    });
  });
};
