'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorsBooks extends Model {
    static associate(models) {
      AuthorsBooks.belongsTo(models.Author, {
        foreignKey: {
          name: 'authorId',
        },
        as: 'authors'
      });
      AuthorsBooks.belongsTo(models.Book, {
        foreignKey: {
          name: 'bookId',
        },
        as: 'books'
      });
    }
  }
  AuthorsBooks.init(
    {
      authorId: {
        type: DataTypes.INTEGER,
      },
      bookId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'AuthorsBook',
    }
  );
  return AuthorsBooks;
};
