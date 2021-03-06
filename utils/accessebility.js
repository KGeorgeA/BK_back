const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.jwtCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] || req.body.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(200).json({
            message: {
              code: '401',
              type: 'error',
              value: 'Ur session had end',
            },
          });
        }
        req.decoded = decoded;
        req.token = token;
        return next();
      });
    } else {
      return res.status(200).json({
        message: {
          code: '401',
          type: 'error',
          value: 'U have no access, pls sign in',
        },
      });
    }
  } catch (error) {
    console.log('session denied error', error);
    return res.status(200).json({
      message: {
        code: '400',
        type: 'error',
        value: error.message,
      },
    });
  }
};
