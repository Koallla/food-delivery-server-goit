const express = require('express');
const mainRoute = require('./main/main');
const addProducts = require('./products/addProduct');
const products = require('./products/index');
const getProductById = require('./products/getProductById');
const putProductById = require('./products/putProductsById');
const getOrderById = require('./orders/getOrderById');
const createUser = require('./users/signUpUsers');
const getUserById = require('./users/getUserById');
const putUserById = require('./users/putUserById');
const deleteUserById = require('./users/deleteUserById');
const getUsers = require('./users/allUsers');
const addOrder = require('./orders/addOrder');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .post('/products', addProducts)
  .get('/products', products)
  .get('/products/:id', getProductById)
  .put('/products/:id', putProductById)
  .get('/orders/:id', getOrderById)
  .get('/users', getUsers)
  .post('/users', createUser)
  .get('/users/:id', getUserById)
  .put('/users/:id', putUserById)
  .delete('/users/:id', deleteUserById)
  .post('/orders', addOrder)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
