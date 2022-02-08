const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');

const userAuth = require('./routes/authRouter');
const userData = require('./routes/userRouter');
const { jwtCheck } = require('./utils/accessebility');

dotenv.config();

const app = express();

const options = {
  origin: 'http://localhost:3000',
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
  }
);

app.use(cors(options));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.use('/auth', userAuth);
app.use('/userdata', jwtCheck, userData);

app.listen(process.env.SERVER_PORT, async () => {
  try {
    await sequelize
      .authenticate()
      .then(console.log('Connected'))
      .catch((err) => console.error(err));
  } catch (error) {}
});
