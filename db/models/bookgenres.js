'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookGenres.belongsTo(models.Book, {
        foreignKey: 'bookId',
        // as: 'books',
      });
      BookGenres.belongsTo(models.Genre, {
        foreignKey: 'genreId',
        // as: 'genres',
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
      // timestamps: false
    }
  );
  return BookGenres;
};
