const {
  Book,
  BookGenres,
  AuthorsBook,
  Author,
  Genre,
} = require('../db/models');
const { Op } = require('sequelize');
const fs = require('fs');

const minMaxPrice = (books) => {
  const minPrice = books.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  const maxPrice = books.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );
  return { min: minPrice.price, max: maxPrice.price };
};

exports.getBooks = async (req, res) => {
  try {
    const { page = 1, size = 12, query } = req.body.data;
    const {
      author = null,
      genre = null,
      price = {
        minPrice: 0,
        maxPrice: 1000,
      },
    } = query;
    const hasAuthor = author === null ? 0 /* shit */ : author;
    const hasGenre = genre === null ? 0 /* shit */ : genre;
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', query);

    if (!query) {
      const books = await Book.findAll();
      const { min, max } = minMaxPrice(books);

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

    const limit = parseInt(size);
    const offset = (page - 1) * size;
    const { count, rows } = await Book.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: Author,
          as: 'authors',
          through: {
            where: {
              authorId: 12,
            },
          },
          required: !!hasAuthor,
        },
        {
          model: Genre,
          as: 'genres',
          through: {
            where: {
              genreId: genre,
            },
          },
          required: !!hasGenre,
        },
      ],
      // where: {
      //   price: { [Op.between]: [price.minPrice, price.maxPrice] },
      // },
    });
    const pageQty = Math.ceil(count / size);
    const { min, max } = minMaxPrice(rows);

    // console.log('query book', rows);

    return res.send({
      books: rows,
      pageQty,
      price: { minPrice: min, maxPrice: max },
    });

    // const limit = parseInt(size);
    // const offset = (page - 1) * size;
    // const { count, rows } = await Book.findAndCountAll({ limit, offset });
    // const pageQty = Math.ceil(count / size);
  } catch (error) {
    console.log('bookController catch error', error);
  }
};
