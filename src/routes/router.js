const express = require('express');
const mainRoute = require('./main/main');
const addProducts = require('./products/addProduct');
const products = require('./products/index');
const getProductById = require('./products/getProductById');
const putProductById = require('./products/putProductsById');
const deleteProductById = require('./products/deleteProductById');
const getOrderById = require('./orders/getOrderById');
const registerUser = require('./users/registerUser');
const getUserById = require('./users/getUserById');
const putUserById = require('./users/putUserById');
const deleteUserById = require('./users/deleteUserById');
const getUsers = require('./users/allUsers');
const addOrder = require('./orders/addOrder');
const authenticate = require('./auth/authenticate');
const verifyToken = require('./auth/verifyToken');
const logout = require('./auth/logout');
const getCurrentUser = require('./users/getCurrentUser');
const addIngredients = require('./ingredients/addIngredientsToDb');
const addCommens = require('./comments/addComments');
const deleteComment = require('./comments/deleteComment');
const getComments = require('./comments/getComments');

const apiRoutes = express.Router();

apiRoutes
  // REGISTRATION
  .post('/auth/login', authenticate)
  .post('/auth/register', registerUser)
  .use(verifyToken)

  // MAIN
  .get('/', mainRoute)

  // lOGOUT
  .get('/auth/logout', logout)

  // CURRENT
  .get('/auth/current', getCurrentUser)

  // USERS
  .get('/users', getUsers)
  .get('/users/:id', getUserById)
  .put('/users/:id', putUserById)
  .delete('/users/:id', deleteUserById)

  // ORDERS
  .get('/orders/:id', getOrderById)
  .post('/orders', addOrder)

  // PRODUCTS
  .post('/products', addProducts)
  .delete('/products/:id', deleteProductById)
  .get('/products', products)
  .get('/products/:id', getProductById)
  .put('/products/:id', putProductById)

  // INGREDIENTS
  .post('/ingredients', addIngredients)

  // COMMENTS
  .post('/comments', addCommens)
  .delete('/comments/:id', deleteComment)
  .get('/comments', getComments)

  // ERROR ROUTE
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
