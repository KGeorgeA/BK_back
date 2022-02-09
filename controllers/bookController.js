const { Book, BookGenres, AuthorsBook } = require('../db/models');
const fs = require('fs');

exports.getFilteredBookData = async (req, res) => {
  try {
    // const {page = 1, size = 10, query}
    const bookgenres = await Book.findAll();
    const authorsbooks = await AuthorsBook.findAll();
    res.send({ bookgenres, authorsbooks });
    // res.send({ bookgenres });
  } catch (error) {
    console.log('getBookData>>>', error);
  }
};

exports.getMultiple = async (req, res) => {
  try {
    const { page = 1, size = 10, query } = req.body.data;

    const limit = parseInt(size);
    const offset = (page - 1) * size;
    const { count, rows } = await Book.findAndCountAll({ limit, offset });
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', count);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', rows);
    // const bookCount = await Book.count();
    // const books = await Book.findAll({ offset, limit });
    const pageQty = Math.ceil(count / size);

    // console.log(rows);
    res.send({ books: rows, pageQty });
  } catch (error) {
    console.log('bookController catch error', error);
  }
};
