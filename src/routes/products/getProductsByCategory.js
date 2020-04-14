const Products = require('../../db/Schemas/products');
const { sendResponse, sendError } = require('../Errors/sendErrors');

// Пример запроса
// http://localhost:3001/products/?category="superpizza"

const productsById = (request, response) => {
  const category = Object.values(request.query).toString().slice(1, -1);

  Products.find()
    .where('categories')
    .in(category)
    .then(product => {
      sendResponse(product, response);
    })
    .catch(() => {
      sendError(response, 'Product');
    });
};

module.exports = productsById;
