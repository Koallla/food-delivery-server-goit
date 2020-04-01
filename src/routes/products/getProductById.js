const Products = require('../../db/Schemas/products');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const getProductById = (request, response) => {
  const id = request.params.id;

  Products.findById(id)
    .then(product => {
      sendResponse(product, response, '200');
    })
    .catch(sendError(response, 'Product'));
};

module.exports = getProductById;
