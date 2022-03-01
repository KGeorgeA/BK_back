'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AuthorsBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authorId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Authors',
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
    await queryInterface.dropTable('AuthorsBooks');
  },
};
