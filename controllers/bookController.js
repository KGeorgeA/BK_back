const {
  Book,
  BookGenres,
  AuthorsBook,
  Author,
  Genre,
  BooksRating,
} = require('../db/models');
const { Op } = require('sequelize');
const fs = require('fs');

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
    console.log(page, size, query);

    const hasAuthor = author === null ? 0 : Number(author);
    const hasGenre =
      genre === null ? 0 : typeof genre === 'object' ? !!genre.length : !!genre;

    const integeredGenreArray =
      genre === null
        ? null
        : typeof genre === 'object'
        ? genre.map((i) => Number(i))
        : Number(genre);
    const proice = price === null ? { minPrice: 0, maxPrice: 1000 } : price;
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
              authorId: Number(author),
            },
          },
          required: !!hasAuthor,
        },
        {
          model: Genre,
          as: 'genres',
          through: {
            where: {
              genreId: integeredGenreArray,
            },
          },
          required: !!hasGenre,
        },
      ],
      where: {
        price: { [Op.between]: [proice.minPrice, proice.maxPrice] },
      },
    });

    const pageQty = Math.ceil(count / size);

    if (!rows.length) {
      return res.send({
        error: {
          type: 'error',
          value: 'Книги по таким параметрам не найдены',
        },
      });
    }

    return res.send({
      books: rows,
      pageQty,
      price: { minPrice: proice.minPrice, maxPrice: proice.maxPrice },
      error: {
        type: 'success',
        value: 'Данные переданы',
      },
    });
  } catch (error) {
    console.log('bookController catch error', error);
  }
};

exports.getBook = async (req, res) => {
  /* if get/post request looks like /___:*smthng* u can get *smthng* by req.params */
  // // // res.send({
  // // //   query: req.params,
  // // // });

  const { id } = req.body.data;

  const bookInfo = await AuthorsBook.findOne({
    include: [
      { model: Author, as: 'authors', required: true },
      {
        model: Book,
        as: 'books',
        required: true,
        include: [
          {
            model: BooksRating,
            as: 'ratings',
          },
          // {
          //   model: BooksComment,
          //   as: 'comments',
          // },
        ],
      },
    ],
    where: { bookId: id },
  });
  let rating = 0;
  if (!bookInfo.books.ratings.length) {
    await Book.update({ rating }, { where: { id } });

    return res.send({
      book: {
        author: bookInfo.authors.fullname,
        name: bookInfo.books.name,
        publisher: bookInfo.books.publisher,
        picture: bookInfo.books.picture,
        price: bookInfo.books.price,
        rating,
        description: bookInfo.books.description,
        // comments: bookInfo.books.comments
      },
    });
  }

  rating = Number(
    (
      bookInfo.books.ratings.reduce((prev, curr) => ({
        rating: prev.rating + curr.rating,
      })).rating / bookInfo.books.ratings.length
    ).toFixed(2)
  );

  await Book.update({ rating }, { where: { id } });

  return res.send({
    book: {
      author: bookInfo.authors.fullname,
      name: bookInfo.books.name,
      publisher: bookInfo.books.publisher,
      picture: bookInfo.books.picture,
      price: bookInfo.books.price,
      rating,
      description: bookInfo.books.description,
      // comments: bookInfo.books.comments
    },
  });
};
