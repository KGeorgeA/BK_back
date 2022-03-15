'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksRating extends Model {
    static associate(models) {
      BooksRating.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
        },
        as: 'user',
      });
    }
  }
  BooksRating.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'BooksRating',
    }
  );
  return BooksRating;
};
