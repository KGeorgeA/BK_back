const { passHash } = require('../utils/passHash');
const { User } = require('../db/models');
const { authValidator, loginValidator } = require('../utils/validate.js');
const { newJwt } = require('../utils/jwtGenerator');

exports.signin = async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({
        error: {
          type: 'error',
          value: 'Какие-то поля не заполнены',
        },
      });
    }
    const { email, password } = req.body.data;

    const validationInfo = await loginValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.status(400).json({
        error: {
          type: 'error',
          value: validationInfo.message,
        },
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        error: {
          type: 'error',
          value: 'User does not exist, try again',
        },
      });
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
          user: {
            name: user.name,
            email: user.email,
            dob: user.dob,
            phoneNumber: user.phoneNumber,
            token,
          },
          error: {
            type: 'success',
            value: `${user.name} successfully loged in`,
          },
        });
    }
    return res.status(400).json({
      error: {
        type: 'error',
        value: 'Wrong password, try again',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.signup = async (req, res) => {
  try {
    console.log(req.body.data);
    if (!req.body.data) {
      return res.status(400).json({
        error: {
          type: 'error',
          value: 'some input fields are empty',
        },
      });
    }
    const { name, email, phoneNumber, password } = req.body.data;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({
        error: {
          type: 'error',
          value: 'this user already exists',
        },
      });
    }

    const validationInfo = await authValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.json({
        error: {
          type: 'error',
          value: validationInfo.message,
        },
      });
    }

    const hashPass = passHash(password);

    await User.create({
      name,
      email,
      phoneNumber,
      password: hashPass,
    }).then(null, (err) => {
      return res.status(501).json({
        error: {
          type: 'error',
          message: err.message,
        },
      });
    });

    const user = await User.findOne({ where: { email } });
    console.log(user.dataValues);

    if (user) {
      const jwtHeader = {
        alg: 'HS256',
        typ: 'JWT',
      };

      const jwtPayload = {
        id: user.id,
        name: user.name,
      };

      const token = newJwt(jwtHeader, jwtPayload);

      return res.status(200).json({
        user: {
          name: user.name,
          email: user.email,
          token,
        },
        error: {
          type: 'success',
          value: 'User was created',
        },
      });
    } else {
      return res.status(501).json({
        error: {
          type: 'error',
          value: err.error,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.tokenCheck = async (req, res) => {
  const { id } = req.decoded;
  const user = await User.findOne({ where: id });

  return res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      token: req.token,
    },
    error: { type: 'success', value: `Everything ok` },
  });
};
