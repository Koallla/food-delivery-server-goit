const getProductsById = require('./get-productsById');
const getProductsByCategory = require('./get-productsByCategory');
const getProducts = require('./get-products');

const products = (request, response) => {
  if (request.query && Object.keys(request.query).includes('ids')) {
    getProductsById(request, response);
  } else if (request.query && Object.keys(request.query).includes('category')) {
    getProductsByCategory(request, response);
  } else {
    getProducts(request, response);
  }
};

module.exports = products;
