'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BooksComments', [
      {
        userId: 1,
        bookId: 1,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 2,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 3,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 4,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 5,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 1,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 2,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 3,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 4,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        bookId: 5,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 1,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 2,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 3,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 4,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        bookId: 5,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 1,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 2,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 3,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 4,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        bookId: 5,
        comment: 'Woah, nice book, awesome story',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BooksComments', null, {});
  },
};
