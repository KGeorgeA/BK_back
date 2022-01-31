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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'George',
        surname: 'Karcivadze',
        phoneNumber: '+79515235344',
        email: 'karcivadzega@gmail.com',
        password:
          '0209e0fd07fd192ad02435c064ff473e5943a2b74761c12a0ae765b02127c738963321d05521a95215109db6a05796a5cfa50ca8bb3bc6d6ca7cb0fb55e1dfdd',
        avatarPath: '/directory/img_name',
        roles: 'USER',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Helen',
        surname: 'Velen',
        phoneNumber: '+7999999999',
        email: 'HelenVelen@gmail.com',
        password:
          '0209e0fd07fd192ad02435c064ff473e5943a2b74761c12a0ae765b02127c738963321d05521a95215109db6a05796a5cfa50ca8bb3bc6d6ca7cb0fb55e1dfdd',
        avatarPath: '/directory/img_name',
        roles: 'USER',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Arthur',
        surname: 'Shelby',
        phoneNumber: '+7999999999',
        email: 'peackyArthur@gmail.com',
        password:
          '0209e0fd07fd192ad02435c064ff473e5943a2b74761c12a0ae765b02127c738963321d05521a95215109db6a05796a5cfa50ca8bb3bc6d6ca7cb0fb55e1dfdd',
        avatarPath: '/directory/img_name',
        roles: 'USER',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'Thomas',
        surname: 'Shelby',
        phoneNumber: '+7999999999',
        email: 'peackyThomas@gmail.com',
        password:
          '0209e0fd07fd192ad02435c064ff473e5943a2b74761c12a0ae765b02127c738963321d05521a95215109db6a05796a5cfa50ca8bb3bc6d6ca7cb0fb55e1dfdd',
        avatarPath: '/directory/img_name',
        roles: 'USER',
        createdAt: '11-11-2000',
        updatedAt: '11-11-2000',
      },
      {
        name: 'James',
        surname: 'Shelby',
        phoneNumber: '+7999999999',
        email: 'peackyJames@gmail.com',
        password:
          '0209e0fd07fd192ad02435c064ff473e5943a2b74761c12a0ae765b02127c738963321d05521a95215109db6a05796a5cfa50ca8bb3bc6d6ca7cb0fb55e1dfdd',
        avatarPath: '/directory/img_name',
        roles: 'USER',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
