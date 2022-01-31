const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

exports.passHash = (pass) =>
  crypto
    .pbkdf2Sync(pass, process.env.PASS_SECRET, 1000, 64, 'sha512')
    .toString('hex');
