'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genres', [
      {
        value: 'fantasy',
        name: 'Фантастика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'detective',
        name: 'Детектив',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'classic',
        name: 'Классика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'adventures',
        name: 'Приключения',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'kids',
        name: 'Детские книги',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'poetry',
        name: 'Поэзия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'humor',
        name: 'Юмор',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'folk',
        name: 'Фольклор',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'novel',
        name: 'Роман',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};
