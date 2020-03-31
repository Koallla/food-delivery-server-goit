const getProductsById = require('./getProductsById');
const getProductsByCategory = require('./getProductsByCategory');
const getProducts = require('./getProducts');

const products = (request, response) => {
  if (request.query && Object.keys(request.query).includes('ids')) {
    getProductsById(request, response);
  } else if (request.query && Object.keys(request.query).includes('category')) {
    getProductsByCategory(request, response);
    console.log('category');
  } else {
    getProducts(request, response);
  }
};

module.exports = products;
