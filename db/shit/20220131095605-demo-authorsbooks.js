'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AuthorsBooks', [
      {
        authorId: 1,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 3,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 4,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 5,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 6,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 7,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 8,
        bookId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 9,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 10,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 11,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 12,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 13,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AuthorsBooks', null, {});
  },
};
