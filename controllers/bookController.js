const { Book, BookGenres, AuthorsBook } = require('../db/models');
const fs = require('fs');

const price = (books) => {
  const minPrice = books.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  const maxPrice = books.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );
  return { min: minPrice.price, max: maxPrice.price };
};

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

    if (!query) {
      const books = await Book.findAll();
      const { min, max } = price(books);

      const limit = parseInt(size);
      const offset = (page - 1) * size;
      const { count, rows } = await Book.findAndCountAll({ limit, offset });
      const pageQty = Math.ceil(count / size);

      // console.log('Books>>>>>>>>>>>>>>>>>>>>>>', rows);
      return res.send({
        books: rows,
        pageQty,
        price: { minPrice: min, maxPrice: max },
      });
    }
    console.log(query);

    console.log('haha>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

    // const books = await Book.findAll();
    // const { min, max } = price(books);

    // const limit = parseInt(size);
    // const offset = (page - 1) * size;
    // const { count, rows } = await Book.findAndCountAll({ limit, offset });
    // const pageQty = Math.ceil(count / size);
  } catch (error) {
    console.log('bookController catch error', error);
  }
};
