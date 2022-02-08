const { passHash } = require('../utils/passHash');
const { User } = require('../db/models');
const fs = require('fs');
// const { fullAvatarPath } = require('../utils/uploadImage/getFullAvatarPath');

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
    const { name, surname, phoneNumber, email } = req.body;
    const newName = name;
    const newSurname = surname;
    const newPhoneNumber = phoneNumber;
    const newEmail = email;
    console.log(id);
    await User.update(
      {
        name: newName,
        surname: newSurname,
        phoneNumber: newPhoneNumber,
        email: newEmail,
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
    const { name, surname, phoneNumber, email, avatarPath } = user.dataValues;

    console.log('getData', avatarPath);
    return res.status(200).json({
      user: {
        name,
        surname,
        phoneNumber,
        email,
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
