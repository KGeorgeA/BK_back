'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BooksComment.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
        },
        as: 'user',
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
