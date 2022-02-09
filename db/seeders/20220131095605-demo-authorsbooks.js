'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AuthorsBooks', [
      {
        authorId: 48, // 1,
        bookId: 52, // 1,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 2,
        bookId: 52, // 2,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 3,
        bookId: 52, // 3,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 4,
        bookId: 52, // 4,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 5,
        bookId: 52, // 5,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 6,
        bookId: 52, // 6,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 7,
        bookId: 52, // 7,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 8,
        bookId: 52, // 8,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 9,
        bookId: 52, // 9,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 10,
        bookId: 52, // 10,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 11,
        bookId: 52, // 11,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 12,
        bookId: 52, // 12,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 48, // 13,
        bookId: 52, // 13,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AuthorsBooks', null, {});
  },
};
