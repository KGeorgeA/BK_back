const { Author, Genre, BookGenre, AuthorsBook } = require('../db/models');

exports.getData = async (req, res) => {
  try {
    const authors = await Author.findAll();
    const genres = await Genre.findAll();

    const mappedAuthors = authors.map((item) => ({
      id: item.id,
      fullname: item.fullname,
    }));

    const mappedGenres = genres.map((item) => ({
      id: item.id,
      value: item.value,
      name: item.name,
    }));
    
    return res.json({ authors: mappedAuthors, genres: mappedGenres });
  } catch (error) {
    console.log('author getdata catch errr', error);
  }
};
