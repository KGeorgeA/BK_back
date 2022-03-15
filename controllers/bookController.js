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

    const hasAuthor = author === null ? null : true;
    const hasGenre = genre === null || !genre.length ? null : true;

    const genresId = hasGenre
      ? await Genre.findAll({
          where: {
            value: genre,
          },
        }).then((result) => result.map((item) => item.dataValues.id))
      : null;

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
              genreId: genresId,
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
      page,
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
  const { id } = req.body;

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
        ],
      },
    ],
    where: { bookId: id },
  });

  let rating = 0;
  if (!bookInfo.books.ratings.length) {
    await Book.update({ rating }, { where: { id } });

    return res.send({
      id,
      author: bookInfo.authors.fullname,
      name: bookInfo.books.name,
      publisher: bookInfo.books.publisher,
      picture: bookInfo.books.picture,
      price: bookInfo.books.price,
      rating,
      description: bookInfo.books.description,
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
    id,
    author: bookInfo.authors.fullname,
    name: bookInfo.books.name,
    publisher: bookInfo.books.publisher,
    picture: bookInfo.books.picture,
    price: bookInfo.books.price,
    rating,
    description: bookInfo.books.description,
  });
};
