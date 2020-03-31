const Products = require('../../db/Schemas/products');

const deleteProductById = (request, response) => {
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
      error: 'Product was not found',
    });
  };

  Products.findOneAndDelete(id)
    .then(product => {
      sendResponse(product);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = deleteProductById;
