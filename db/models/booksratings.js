'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
