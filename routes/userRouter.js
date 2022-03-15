const express = require('express');
const userController = require('../controllers/userController');
const { upload } = require('../utils/uploadImage/upload');
const { jwtCheck } = require('./utils/accessebility');

const userRouter = express.Router();

userRouter.post(
  '/avatarchange', jwtCheck,
  upload.single('file'),
  userController.uploadAvatar
);

userRouter.put('/update', jwtCheck, userController.dataUpdate);
userRouter.put('/passwordchange', jwtCheck, userController.passwordChange);
userRouter.get('/image', jwtCheck, userController.getImage);
userRouter.get('/getdata', jwtCheck, userController.getData);
userRouter.post('/ratebook', jwtCheck, userController.rateBook);

module.exports = userRouter;
