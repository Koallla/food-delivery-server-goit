const Products = require('../../db/Schemas/products');
const { sendResponse } = require('../Errors/sendErrors');

const addProduct = (request, response) => {
  const product = request.body;

  const newProduct = new Products(product);

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'product was not saved',
    });
  };

  newProduct
    .save()
    .then(product => {
      sendResponse(product, response, '201');
    })
    .catch(sendError);
};

module.exports = addProduct;
