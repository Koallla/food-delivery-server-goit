const Products = require('../../db/Schemas/products');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const products = (request, response) => {
  Products.find()
    .then(products => {
      sendResponse(products, response);
    })
    .catch(() => {
      sendError(response, 'Products');
    });
};

module.exports = products;
