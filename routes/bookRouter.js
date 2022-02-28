const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.post('/multiple', bookController.getBooks);
// bookRouter.get('/single', bookController);

module.exports = bookRouter;
