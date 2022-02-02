const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.jwtCheck = (req, res, next) => {
  try {
    console.log(req.headers);
    if (req.headers.authorization) {
      jwt.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) {
            return res.status(401).json({
              message: {
                type: 'error',
                value: 'Ur session had end',
              },
            });
            // .removeHeader('Authorization');
          }
          req.userId = decoded.id;
          return next();
        }
      );
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
