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
        // authorId: 1,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Not Darling',
        // authorId: 2,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Not a Book',
        // authorId: 3,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Book',
        // authorId: 4,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Marvel vs DC',
        // authorId: 5,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Последнее Желание',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Мечь Предназначения',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Кровь эльфов',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Час Презрения',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Крещение огнём',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Башня Ласточик',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Владычица Озера',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Ведьмак: Сезон Гроз',
        // authorId: 12,
        publisher: 'Какое-то издательство',
        price: 250,
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/book_name',
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
