const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/filtered', bookController.getFilteredBookData);
bookRouter.post('/multiple', bookController.getMultiple);
// bookRouter.get('/single', bookController);

module.exports = bookRouter;
