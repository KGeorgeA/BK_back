const { passHash } = require('../utils/passHash');
const { User } = require('../db/models');
const { authValidator, loginValidator } = require('../utils/validate.js');
const { newJwt } = require('../utils/jwtGenerator');
//
//
//

exports.signup = async (req, res) => {
  try {
    console.log(req.body.data);
    if (!req.body.data) {
      return res.status(400).json({
        message: {
          type: 'error',
          value: 'some input fields are empty',
        },
      });
    }
    const { name, email, phoneNumber, password } = req.body.data;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({
        message: {
          type: 'error',
          value: 'this user already exists',
        },
      });
    }

    const validationInfo = await authValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.json({
        message: {
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
    }).then(
      () => {
        return res.status(200).json({
          message: {
            type: 'success',
            value: 'User was created',
          },
        });
      },
      (err) => {
        return res.status(501).json({
          message: {
            type: 'error',
            value: err.message,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.signin = async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({
        message: {
          type: 'error',
          value: 'Some input fields are empty',
        },
      });
      // throw Error('some input fields are empty');
    }
    const { email, password } = req.body.data;

    const validationInfo = await loginValidator({ data: req.body.data });

    if (!validationInfo.code) {
      return res.status(400).json({
        message: {
          type: 'error',
          value: validationInfo.message,
        },
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        message: {
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
          data: {
            name: user.name,
            email: user.email,
          },
          loggedIn: {
            isLoggedIn: true,
            token: token,
          },
          message: {
            type: 'success',
            value: `${user.name} successfully loged in`,
          },
        });
    }
    return res.status(400).json({
      message: {
        type: 'error',
        value: 'Wrong password, try again',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.privateTest = async (req, res) => {
  console.log('u have access to this');
};
