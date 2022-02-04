const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.jwtCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] || req.body.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: {
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
      console.log('no headers');
      return res.status(401).json({
        message: {
          type: 'error',
          value: 'U have no access, pls sign in',
        },
      });
    }
  } catch (error) {
    console.log('session denied error', error);
    return res.status(400).json({
      message: {
        type: 'error',
        value: error.message,
      },
    });
  }
};
