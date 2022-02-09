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
    await queryInterface.bulkInsert('AuthorsBooks', [
      {
        authorId: 1,
        bookId: 1,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 2,
        bookId: 2,
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        authorId: 3,
        bookId: 3,
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
    await queryInterface.bulkDelete('AuthorsBooks', null, {});
  },
};
