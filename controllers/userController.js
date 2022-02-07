const { passHash } = require('../utils/passHash');
const { User } = require('../db/models');

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
    const isExact = passHash(password) === user.dataValues.password;
    if (passwordFirst !== passwordSecond) {
      return res.status(200).json({
        error: {
          code: '400',
          type: 'error',
          value: 'Пароли не совпадают',
        },
      });
    }
    const newPassword = passHash(passwordSecond);

    console.log(
        { passwordFirst, passwordSecond, password },
        id,
        user.dataValues,
        isExact
    );

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
