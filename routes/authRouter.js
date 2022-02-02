const express = require('express');
const authController = require('../controllers/authController');
const { jwtCheck } = require('../utils/accessebility');

const usersRouter = express.Router();

usersRouter.post(
  '/signup',
  (req, res, next) => {
    console.log('lala signup');
    next();
  },
  authController.signup
);
usersRouter.post(
  '/signin',
  (req, res, next) => {
    console.log('lala signin');
    next();
  },
  authController.signin
);
usersRouter.get('/private', jwtCheck, authController.privateTest);

module.exports = usersRouter;
