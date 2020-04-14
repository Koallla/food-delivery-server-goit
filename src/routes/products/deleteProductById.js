const Products = require('../../db/Schemas/products');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const deleteProductById = (request, response) => {
  const id = request.params.id;

  Products.findOneAndDelete({ _id: id })
    .then(product => {
      sendResponse(product, response);
    })
    .catch(() => {
      sendError(response, 'Product');
    });
};

module.exports = deleteProductById;
