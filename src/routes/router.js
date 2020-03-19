const express = require('express');
const mainRoute = require('./main/main');
const products = require('./products');
// const getProducts = require('./products/get-products');
const getProductById = require('./products/get-productById');
const createUser = require('./users/signup-users');
// const  = require('./users/');
// const addOrder = require('./users/orders/addOrder');

const apiRoutes = express.Router();

// const middlewareExample = (req, resp, next) => {
//   if (req.body.userName) {
//     next();
//     return;
//   }

//   resp.status(400);
//   resp.json({
//     error: 'user has no "userName" field',
//   });
// };

apiRoutes
  .get('/', mainRoute)
  .get('/products', products)
  .get('/products/:id', getProductById)
  // .get('/users/:id', getUserById)
  .post('/users', createUser)
  // .post('/orders', addOrder)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
