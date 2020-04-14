const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/router');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.json(404).send('No such page');
};

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/', router)
    .use(errorHandler);

  app.listen(port);

  console.log(`Server was started at http://localhost:${port}`);
};

module.exports = startServer;
