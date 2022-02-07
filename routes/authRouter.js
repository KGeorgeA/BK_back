const express = require('express');
const authController = require('../controllers/authController');
const { jwtCheck } = require('../utils/accessebility');

const authRouter = express.Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);
authRouter.get('/tokenauth', jwtCheck, authController.tokenCheck);

module.exports = authRouter;
