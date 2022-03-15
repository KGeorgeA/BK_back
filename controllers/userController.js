const { passHash } = require('../utils/passHash');
const { User, BooksRating, Book } = require('../db/models');
const fs = require('fs');
const { ratingMath } = require('../utils/ratingMath');
const { normalizeDate } = require('../utils/normalizeDate');

exports.passwordChange = async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(200).json({
        error: {
          code: '200',
          type: 'error',
          value: 'Какие-то поля не заполнены',
        },
      });
    }

    const { passwordFirst, passwordSecond, password } = req.body.data;
    const { id } = req.decoded;
    const user = await User.findOne({ where: { id } });
    const isExact = passHash(passwordSecond) === user.dataValues.password;

    if (passwordFirst !== passwordSecond) {
      return res.status(200).json({
        error: {
          code: '400',
          type: 'error',
          value: 'Пароли не совпадают',
        },
      });
    }

    const newPassword = passHash(password);

    if (!isExact) {
      return res.json({
        error: {
          type: 'error',
          value: 'Введён неверный пароль',
        },
      });
    } else {
      await user.update({ password: newPassword });
      return res.status(200).json({
        errror: {
          code: '200',
          type: 'success',
          value: 'Пароль изменен',
        },
      });
    }
  } catch (error) {}
};

exports.dataUpdate = async (req, res) => {
  try {
    const { id } = req.decoded;

    const { name, surname, phoneNumber, email, dob } = req.body.data;
    const newName = name;
    const newSurname = surname;
    const newPhoneNumber = phoneNumber;
    const newEmail = email;
    const newDob = normalizeDate(dob, 0);

    await User.update(
      {
        name: newName,
        surname: newSurname,
        phoneNumber: newPhoneNumber,
        email: newEmail,
        dob: newDob,
      },
      {
        where: { id },
      }
    );
    return res.status(200).json({
      user: {
        name,
        surname,
        phoneNumber,
        email,
        dob,
      },
      error: {
        code: '200',
        type: 'success',
        value: 'Данные изменены',
      },
    });
  } catch (error) {
    console.log('data update error', error);
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    const { id } = req.decoded;

    const { path } = req.file;
    const user = await User.findOne({ where: { id } });
    await user.update({ avatarPath: `/${path}` });
    console.log('uploadAvatar', path);
    return res.status(200).send(`/${path}`);
  } catch (error) {
    console.log('upload error', error);
  }
};

exports.getImage = async (req, res) => {
  try {
    const { id } = req.decoded;
    const user = await User.findOne({ where: { id } });

    if (fs.existsSync(user.dataValues.avatarPath)) {
      console.log('exists');
      return res.status(200).send(user.dataValues.avatarPath);
    } else {
      console.log('not exists');
      return res.send({
        error: {
          code: '404',
          type: 'error',
          value: 'Такого файла нет',
        },
      });
    }
  } catch (error) {
    console.log('getimage error', error);
  }
};

exports.getData = async (req, res) => {
  try {
    const { id } = req.decoded;
    const user = await User.findOne({ where: { id } });
    const { name, surname, phoneNumber, email, avatarPath, dob } =
      user.dataValues;

    return res.status(200).json({
      user: {
        name,
        surname,
        phoneNumber,
        email,
        dob: normalizeDate(dob, 1),
      },
      avatarPath,
      error: {
        code: '200',
        type: 'success',
        value: 'Данные переданы',
      },
    });
  } catch (error) {
    console.log('getData error', error);
  }
};

exports.rateBook = async (req, res) => {
  try {
    const { id } = req.decoded;
    const { bookId, userRate } = req.body.data;

    const book = await Book.findOne({
      include: ['ratings'],
      where: { id: bookId },
    });

    if (!book) {
      return res.send({
        error: {
          type: 'error',
          value: 'Книги не существует',
        },
      });
    }

    if (!book.ratings.find((userRatingObj) => userRatingObj.userId === id)) {
      await BooksRating.create({
        bookId,
        userId: id,
        rating: userRate,
      });

      ratingMath(bookId);

      return res.send({
        error: {
          type: 'succes',
          value: 'Created',
        },
      });
    }

    await BooksRating.update(
      {
        rating: userRate,
      },
      {
        where: {
          bookId,
          userId: id,
        },
      }
    );

    ratingMath(bookId);

    return res.send({
      error: {
        type: 'succes',
        value: 'Updated',
      },
    });
  } catch (error) {
    console.log('rateBook', error);
  }
};
