const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');
const { jwtCheck } = require('../utils/accessebility');

// for test
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file) {
      const error = file.mimetype.includes('image')
        ? null
        : new Error('wrong file');
    }
    cb(error, './uploads');
  },
  filename: (req, file, cb) => {
    const fileName = file
      ? Date.now() + file.originalname.toLowerCase().split(' ').join('-')
      : 'picture';
    cb(null, fileName);
  },
});

const userRouter = express.Router();

userRouter.post(
  '/avatarchange',
  multer({ storage: storageConfig }).single('file'),
  (req, res) => console.log(req)
);
userRouter.put('/update');
userRouter.put('/passwordchange', jwtCheck, userController.passwordChange);

module.exports = userRouter;
