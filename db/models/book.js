'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Genre, {
        through: models.BookGenre,
        foreignKey: {
          name: 'bookId',
        },
        as: 'genres',
      });
      Book.belongsToMany(models.Author, {
        through: models.AuthorsBook,
        foreignKey: {
          name: 'bookId',
        },
        as: 'authors',
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      publisher: DataTypes.STRING,
      price: DataTypes.FLOAT,
      authorId: DataTypes.INTEGER,
      // rating: DataTypes.FLOAT, // потом
      // description: DataTypes.STRING, // потом
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
