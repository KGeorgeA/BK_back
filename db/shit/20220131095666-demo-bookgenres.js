'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BookGenres', [
      {
        bookId: 1,
        genreId: 1,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 2,
        genreId: 2,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 3,
        genreId: 3,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 4,
        genreId: 4,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 5,
        genreId: 5,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 6,
        genreId: 6,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 7,
        genreId: 7,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 8,
        genreId: 8,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 9,
        genreId: 9,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        bookId: 10,
        genreId: 10,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BookGenres', null, {});
  },
};
