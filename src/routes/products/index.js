const getProductsById = require('./get-productsById');
const getProductsByCategory = require('./get-productsByCategory');

const products = (request, response) => {
  if (request.query && Object.keys(request.query).includes('ids')) {
    console.log('ids');
    getProductsById(request, response);
  } else if (request.query && Object.keys(request.query).includes('category')) {
    console.log('category');
    getProductsByCategory(request, response);
  }
};

module.exports = products;
