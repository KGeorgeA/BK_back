const express = require('express');
const authController = require('../controllers/authController');

const usersRouter = express.Router();

usersRouter.post('/registration', authController.registration);
usersRouter.post('/login', authController.login);

module.exports = usersRouter;
