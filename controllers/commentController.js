const { User, Book, BooksComment } = require('../db/models');

exports.getComments = async (req, res) => {
  try {
    const { bookId } = req.body.data;

    const bookComments = await BooksComment.findAll({
      include: ['users'],
      where: { bookId },
    });

    if (!bookComments) {
      return res.send({
        error: {
          type: 'error',
          value: 'Комментариев не существует',
        },
      });
    }

    const comments = bookComments.map((item) => {
      return {
        userId: item.users.id,
        userName: item.users.name,
        userAvatarPath: item.users.avatarPath,
        userSurname: item.users.surname,
        commentId: item.id,
        parentId: null,
        userComment: item.dataValues.comment,
      };
    });

    return res.send({
      comments,
    });
  } catch (error) {
    console.log('getComments error', error);
  }
};

exports.addCommentBook = async (req, res) => {
  try {
    const { id } = req.decoded;
    const { bookId, userComment } = req.body.data;

    const book = await Book.findOne({
      include: ['comments'],
      where: { id: bookId },
    });

    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!book) {
      return res.send({
        error: {
          type: 'error',
          value: 'Книги не существует',
        },
      });
    }

    if (!book.comments.find((userComment) => userComment.userId === id)) {
    await BooksComment.create({
      bookId,
      userId: id,
      comment: userComment,
    });

    const cmId = await BooksComment.findOne({
      where: { userId: id, bookId, comment: userComment },
    });

    return res.send({
      userId: id,
      userName: user.dataValues.name,
      userSurname: user.dataValues.surname,
      userAvatarPath: user.dataValues.avatarPath,
      commentId: cmId.dataValues.id,
      parentId: null,
      userComment: userComment,
    });
    }

    await BooksComment.update(
      {
        comment: userComment,
      },
      {
        where: {
          bookId,
          userId: id,
        },
      }
    );

    return res.send({
      error: {
        type: 'succes',
        value: 'Updated',
      },
    });
  } catch (error) {
    console.log('commentBook error', error);
  }
};
