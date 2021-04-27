/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const NotFoundError = require('./errors/NotFoundError');

const PORT = 3001;
const app = express();

mongoose.connect('mongodb://localhost:27017/dvsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(requestLogger);

app.use(routes);
app.use(errorLogger);
app.use(errors());

app.use('*', (req, res) => {
  throw new NotFoundError('Not found');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
