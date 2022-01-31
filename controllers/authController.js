const { passHash } = require('../utils/passHash');
const { User } = require('../db/models');
const { authValidator, loginValidator } = require('../utils/validate.js');
const { newJwt } = require('../utils/jwtGenerator');
//
//
//

exports.registration = async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({ message: 'some input fields are empty' });
    }
    const { name, email, phoneNumber, password } = req.body.data;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ message: 'this user already exists' });
    }

    const validationInfo = await authValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.json(validationInfo.message);
    }

    const hashPass = passHash(password);

    await User.create({
      name,
      email,
      phoneNumber,
      password: hashPass,
    }).then(
      () => {
        return res.status(200).json({ message: 'User was created' });
      },
      (err) => {
        return res.status(501).json(err);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({ message: 'some input fields are empty' });
    }
    const { email, password } = req.body.data;

    const validationInfo = await loginValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.status(400).json(validationInfo.message);
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ message: 'User does not exist, try again' });
    }

    const hashPass = passHash(password);

    if (hashPass === user.password) {
      const jwtHeader = {
        alg: 'HS256',
        typ: 'JWT',
      };
      const jwtPayload = {
        id: user.id,
        name: user.name,
      };
      const token = newJwt(jwtHeader, jwtPayload);

      return res
        .status(200)
        .header('Authorization', `Bearer ${token}`)
        .json({
          loggedIn: {
            isLoggedIn: true,
            token: token,
          },
          message: `${user.name} successfully loged in`,
        });
    }
    return res.status(400).json({ message: 'Wrong password, try again' });
  } catch (error) {
    console.log(error);
  }
};
