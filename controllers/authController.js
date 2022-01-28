const validate = require('validate.js');
//
//
//

exports.registration = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body.data;
    if (!req.body) {
      console.log('nothing here');
    }
    console.log(name, email);
    console.log('u trying to ZAREGATSA YOPTA');
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    console.log('u trying to login');
  } catch (error) {
    console.log(error);
  }
};
