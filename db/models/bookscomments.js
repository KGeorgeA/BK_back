'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksComment extends Model {
    static associate(models) {
      BooksComment.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
        },
        as: 'users',
      });
    }
  }
  BooksComment.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'BooksComment',
    }
  );
  return BooksComment;
};
