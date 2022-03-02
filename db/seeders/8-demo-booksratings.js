'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BooksRatings', [
      {
        userId: 1,
        bookId: 1,
        rating: 5.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 2,
        rating: 5.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 3,
        rating: 5.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 4,
        rating: 5.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 5,
        rating: 9.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 1,
        rating: 9.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 2,
        rating: 1.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 3,
        rating: 3.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 4,
        rating: 2.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 5,
        rating: 7.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 1,
        rating: 6.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 2,
        rating: 3.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 3,
        rating: 9.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 4,
        rating: 8.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 5,
        rating: 0.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 1,
        rating: 2.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 2,
        rating: 7.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 3,
        rating: 8.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 4,
        rating: 6.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 5,
        rating: 5.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BooksRatings', null, {});
  },
};
