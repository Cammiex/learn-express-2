const handlingError = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({
    msg: 'Something broke!',
    error: err,
  });
};

export default handlingError;
