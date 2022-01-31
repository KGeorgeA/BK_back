const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.newJwt = (header, payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    header,
    expiresIn: '12h',
  });
