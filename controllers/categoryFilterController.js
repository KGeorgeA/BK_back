const { Author, Genre, BookGenre, AuthorsBook } = require('../db/models');

exports.getData = async (req, res) => {
  try {
    const authors = await Author.findAll();
    const genres = await Genre.findAll();
    // console.log('Authors', authors);
    const mappedAuthors = authors.map((item) => ({
      id: item.id,
      fullname: item.fullname,
    }));
    // console.log('genres', genres);
    const mappedGenres = genres.map((item) => ({
      id: item.id,
      value: item.value,
      name: item.name,
    }));
    // const bookGenres = await BookGenre.findAll();
    // console.log('bookGenres', bookGenres)
    // const authorsBooks = await AuthorsBook.findAll();
    // console.log('authorsBooks', authorsBooks);
    res.json({ authors: mappedAuthors, genres: mappedGenres });
  } catch (error) {
    console.log('author getdata catch errr', error);
  }
};
