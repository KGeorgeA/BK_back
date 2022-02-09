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
    await queryInterface.bulkInsert('Authors', [
      {
        fullname: 'Карцивадзе Георгий',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Джоан Роулинг',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Князев Владимир',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Кинг Стивен',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Шекспир Уильям',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Толстой Лев',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Лондон Джек',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Брэдбери Рэй',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Бронте Шарлотта',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Лукьяненко Сергей',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Акунин Борис',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        fullname: 'Сапковский Анджей',
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
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
