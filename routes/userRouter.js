const express = require('express');
const userController = require('../controllers/userController');
const { upload } = require('../utils/uploadImage/upload');

// for test

const userRouter = express.Router();

userRouter.post(
  '/avatarchange',
  upload.single('file'),
  userController.uploadAvatar
);
userRouter.put('/update', userController.dataUpdate);
userRouter.put('/passwordchange', userController.passwordChange);
userRouter.get('/image', userController.getImage);
userRouter.get('/getdata', userController.getData);

module.exports = userRouter;
