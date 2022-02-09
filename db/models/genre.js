'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Book, {
        through: models.BookGenre,
        foreignKey: 'genreId',
        as: 'genres'
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
      // timestamps: false
    }
  );
  return Genre;
};
