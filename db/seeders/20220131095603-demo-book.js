'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Darling',
        author: 'Karcivadze George',
        price: 250,
        rating: 10,
        description: 'This is a book',
        picture: 'path/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Not Darling',
        author: 'Karcivadze George',
        price: 250,
        rating: 10,
        description: 'This is a book',
        picture: 'path/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Not a Book',
        author: 'Karcivadze George',
        price: 250,
        rating: 10,
        description: 'This is a book',
        picture: 'path/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Book',
        author: 'Karcivadze George',
        price: 250,
        rating: 10,
        description: 'This is a book',
        picture: 'path/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Marvel vs DC',
        author: 'Karcivadze George',
        price: 250,
        rating: 10,
        description: 'This is a book',
        picture: 'path/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  },
};
