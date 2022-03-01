const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.post('/multiple', bookController.getBooks);
bookRouter.post('/single', bookController.getBook);

module.exports = bookRouter;
