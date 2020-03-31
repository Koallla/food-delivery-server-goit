const express = require('express');
const mainRoute = require('./main/main');
const addProducts = require('./products/addProduct');
const getProductById = require('./products/get-productById');
const getOrderById = require('./orders/getOrderById');
const createUser = require('./users/signup-users');
const getUserById = require('./users/get-userById');
const putUserById = require('./users/putUserById');
const deleteUserById = require('./users/deleteUserById');
const deleteProductById = require('./products/deleteProductById');
const users = require('./users/allUsers');
const addOrder = require('./orders/addOrder');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .post('/products', addProducts)
  .get('/products/:id', getProductById)
  .delete('/products/:id', deleteProductById)
  .get('/orders/:id', getOrderById)
  .get('/users', users)
  .post('/users', createUser)
  .get('/users/:id', getUserById)
  .put('/users/:id', putUserById)
  .delete('/users/:id', deleteUserById)
  .post('/orders', addOrder)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
