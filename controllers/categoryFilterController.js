const { Author, Genre, BookGenre, AuthorsBook } = require('../db/models');

exports.getData = async (req, res) => {
  try {
    const authors = await Author.findAll();
    const genres = await Genre.findAll();
    //                              {id, fullname}
    const mappedAuthors = authors.map((item) => ({
      id: item.id,
      fullname: item.fullname,
    }));

    //                          {id, value, name}
    const mappedGenres = genres.map((item) => ({
      id: item.id,
      value: item.value,
      name: item.name,
    }));
    res.json({ authors: mappedAuthors, genres: mappedGenres });
  } catch (error) {
    console.log('author getdata catch errr', error);
  }
};
