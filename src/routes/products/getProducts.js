const Products = require('../../db/Schemas/products');

const products = (request, response) => {
  const sendResponse = products => {
    response.status(200);
    response.json({
      status: 'success',
      products,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'products was not found',
    });
  };

  Products.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = products;
