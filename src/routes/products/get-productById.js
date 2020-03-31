const Products = require('../../db/Schemas/products');

const getProductById = (request, response) => {
  const id = request.params.id;

  const sendResponse = product => {
    response.status(200);
    response.json({
      status: 'success',
      product,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not found',
    });
  };

  Products.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getProductById;
