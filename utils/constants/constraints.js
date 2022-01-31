let passRegexp = new RegExp(
  '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\\]:;<>,.?/~_+-=|]).{2,}$'
);

exports.authСonstraints = {
  name: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    type: 'string',
    format: {
      pattern: '[A-Za-z]+',
      message: 'can only contain a-z, A-Z',
    },
  },
  phoneNumber: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    type: 'string',
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    type: 'string',
    length: {
      minimum: 4,
      maximum: 16,
      message: 'must be at least 4 characters and less then 16',
    },
    format: {
      pattern: passRegexp,
      // выглядит как пиздец, а не сообщение
      message:
        'must contain at least one digit, one lowercase character, one uppercase character, one special character and length should be between 8 and 16 characters',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    email: true,
  },
};

exports.loginСonstraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    email: true,
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'is required',
    },
    type: 'string',
  },
};
