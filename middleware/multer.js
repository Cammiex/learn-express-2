import multer from 'multer';

const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (_, file, cb) => {
    const filename = new Date().getTime().toString() + '-' + file.originalname;
    cb(null, filename);
  },
});

const fileFilter = (_, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    return cb(null, true);
  }
  cb(new Error('only .png .jpg .jpeg are allowed.'), false);
};

const upload = multer({ storage, fileFilter }).single('images');

export default upload;
