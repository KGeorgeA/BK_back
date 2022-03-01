'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        fullname: 'Джоан Роулинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Князев Владимир',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Кинг Стивен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Шекспир Уильям',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Толстой Лев',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Лондон Джек',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Брэдбери Рэй',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Бронте Шарлотта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Лукьяненко Сергей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Акунин Борис',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Сапковский Анджей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
