'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.belongsToMany(models.Book, {
        through: models.AuthorsBook,
        foreignKey: {
          name: 'authorId',
        },
        as: 'books'
      });
    }
  }
  Author.init(
    {
      fullname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Author',
    }
  );
  return Author;
};
