'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.BooksRating, {
        foreignKey: {
          name: 'userId',
        },
        as: 'ratings',
      });
      User.hasMany(models.BooksComment, {
        foreignKey: {
          name: 'userId',
        },
        as: 'comments',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatarPath: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
