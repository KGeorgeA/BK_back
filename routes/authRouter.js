const express = require('express');
const authController = require('../controllers/authController');
const { jwtCheck } = require('../utils/accessebility');

const usersRouter = express.Router();

usersRouter.post('/signup', authController.signup);
usersRouter.post('/signin', authController.signin);
usersRouter.get('/tokenauth', jwtCheck, authController.tokenCheck);

module.exports = usersRouter;
