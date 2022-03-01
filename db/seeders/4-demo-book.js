'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Гарри Поттер и философский камень',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/HP_philosophy_stone.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и Тайная комната',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/Harry_Potter_and_the_Chamber_of_Secrets_—_book.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и узник Азкабана',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и Кубок огня',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/Harry_Potter_and_the_Goblet_of_Fire.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и Орден Феникса',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/Harry_Potter_and_the_Order_of_the_Phoenix_—_book.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и Принц-полукровка',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/200px-Harry_Potter_and_the_Half-Blood_Prince_—_book.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер и Дары Смерти',
        authorId: 1,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/Harry_Potter_and_the_Deathly_Hallows_—_book.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Стрелок',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Kingstrelokm99fd.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Извлечение троих',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Drawing_of_the_Three.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Бесплодные земли',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Dark_Tower_The_Waste_Lands.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Колдун и кристалл',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Wizard-and-Glass-The-Dark-Tower-4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Волки Кальи',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Volkikall.jpeg.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Песнь Сюзанны',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Song_of_Susannah.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Dark_Tower.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тёмная Башня: Ветер сквозь замочную скважину',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/269px-The_Wind_Through_the_Keyhole_Cover_Grant.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Оно',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/230px-It_cover.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зелёная миля',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/265px-green_mile.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мистер мерседес',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Mister_Mersedes.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Чужак',
        authorId: 3,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/the_outsider.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гамлет',
        authorId: 4,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/51IWerpjMGL._SX322_BO1,204,203,200_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ромео и Джульетта',
        authorId: 4,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/06b170086a344ac1e9cee94d4bba5485.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Детство, Отрочество и Юность',
        authorId: 5,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/detstvo_otrochestvo_unost.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Война и мир',
        authorId: 5,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/365442.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Анна Каренина',
        authorId: 5,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/172100-lev-tolstoy-anna-karenina-172100.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мартин Иден',
        authorId: 6,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/18232360-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Белый Клык',
        authorId: 6,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/514DvI57jiL.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зов предков',
        authorId: 6,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/2724518_detail.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сердца трёх',
        authorId: 6,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Hearts_of_Three.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '451 градус по Фаренгейту',
        authorId: 7,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/39507162--.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Марсианские хроники',
        authorId: 7,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Martian_Chronicles.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вино из одуванчиков',
        authorId: 7,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Dandelion_Wine.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Джейн Эйр',
        authorId: 8,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Jane_Air.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Шерли',
        authorId: 8,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Sherli.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ночной дозор',
        authorId: 9,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/119466-sergey-lukyanenko-nochnoy-dozor.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Последний дозор',
        authorId: 9,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/posledni_dozor-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Новый дозор',
        authorId: 9,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/novii_dozor.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сумеречный дозор',
        authorId: 9,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/sumerechnii_dozor-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дневной дозор',
        authorId: 9,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture:
          '/public/uploads/books/kniga_dnevnoy_dozor_lukyanenko_s.v_1609224598_1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Азазель',
        authorId: 10,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Azazel_(book).jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Левиафан',
        authorId: 10,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Leviafan_book.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Любовник смерти',
        authorId: 10,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/lubovnik_smeri.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Последнее Желание',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Last_Wish.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Мечь Предназначения',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Sword_of_Destiny.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Кровь эльфов',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Blood_of_Elves.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Час Презрения',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Time_of_Contempt.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Крещение огнём',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Baptism_of_Fire.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Башня Ласточик',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Tower_of_the_Swallow_Orion.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Владычица Озера',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/The_Lady_of_the_Lake_Orion.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмак: Сезон Гроз',
        authorId: 11,
        publisher: 'АСТ',
        price: getRndInteger(200, 1000),
        // rating: 10,
        // description: 'This is a book',
        picture: '/public/uploads/books/Season_of_Storms_Orion.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
