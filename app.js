const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const dotenv = require('dotenv');

const auth = require('./routes/authRouter');

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
app.use(express.static(path.join(__dirname, 'public')));

// app.post('/registration', (req, res) => {
//   console.log(req.body);
//   res.json({ text: 'U have been registered WITHOUT ANY ERROR', err: 'err' });
// });

app.use('/api', auth);

app.listen(process.env.SERVER_PORT, async () => {
  try {
    await sequelize
      .authenticate()
      .then(console.log('Connected'))
      .catch((err) => console.error(err));
  } catch (error) {}
});
