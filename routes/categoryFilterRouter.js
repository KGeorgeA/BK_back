const express = require('express');
const categoryFilterController = require('../controllers/categoryFilterController');

const categoryFilterRouter = express.Router();

categoryFilterRouter.get('/getfilterdata', categoryFilterController.getData);

module.exports = categoryFilterRouter;