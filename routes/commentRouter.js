const express = require('express');
const commentController = require('../controllers/commentController');
const userRouter = express.Router();
const { jwtCheck } = require('./utils/accessebility');

userRouter.post('/addComment', jwtCheck, commentController.addCommentBook);
userRouter.post('/getComments', commentController.getComments);

module.exports = userRouter;
