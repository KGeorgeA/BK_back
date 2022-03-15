'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.belongsToMany(models.Book, {
        through: models.BookGenre,
        foreignKey: 'genreId',
        as: 'books'
      });
    }
  }
  Genre.init(
    {
      value: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Genre',
    }
  );
  return Genre;
};
