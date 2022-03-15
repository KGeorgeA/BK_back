'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookGenres extends Model {
    static associate(models) {
      BookGenres.belongsTo(models.Book, {
        foreignKey: {
          name: 'bookId',
        },
        as: 'books',
      });
      BookGenres.belongsTo(models.Genre, {
        foreignKey: {
          name: 'genreId',
        },
        as: 'genres',
      });
    }
  }
  BookGenres.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
      },
      genreId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'BookGenre',
    }
  );
  return BookGenres;
};
