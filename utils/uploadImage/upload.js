const multer = require('multer');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file) {
      const error = file.mimetype.includes('image')
        ? null
        : new Error('wrong file');
      cb(error, 'public/uploads');
    }
  },
  filename: (req, file, cb) => {
    const fileName = file
      ? Date.now() + file.originalname.toLowerCase().split(' ').join('-')
      : 'picture';
    cb(null, fileName);
  },
});

module.exports.upload = multer({ storage: storageConfig });
