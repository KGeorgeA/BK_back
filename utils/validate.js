const validate = require('validate.js');
const {
  authСonstraints,
  loginСonstraints,
} = require('../utils/constants/constraints');

const onFullfield = () => {
  return { code: 1, message: 'Success' };
};

const onRejected = (err) => {
  return { code: 0, message: err };
};

// validate.validators.name.PATTERN

exports.authValidator = async ({ data }) => {
  return await validate
    .async(data, authСonstraints)
    .then(onFullfield, onRejected);
};

exports.loginValidator = async ({ data }) => {
  return await validate
    .async(data, loginСonstraints)
    .then(onFullfield, onRejected);
};
