'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorsBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
