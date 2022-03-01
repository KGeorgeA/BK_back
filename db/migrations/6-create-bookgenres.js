'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookGenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genreId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Genres',
        //   key: 'id',
        // },
      },
      bookId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Books',
        //   key: 'id',
        // },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookGenres');
  },
};
