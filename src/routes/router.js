const express = require('express');
const mainRoute = require('./main/main');
const products = require('./products');
const getProductById = require('./products/get-productById');
const createUser = require('./users/signup-users');
const getUserById = require('./users/get-userById');
const users = require('./users/allUsers');
const userOrder = require('./users/userOrder');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/products', products)
  .get('/products/:id', getProductById)
  .get('/users', users)
  .post('/users', createUser)
  .get('/users/:id', getUserById)
  .post('/orders', userOrder)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
