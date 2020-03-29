const Products = require('../../db/Schemas/products');

const addProduct = (request, response) => {
  const product = request.body;

  const newProduct = new Products(product);

  const sendResponse = product => {
    response.status(201);
    response.json({
      status: 'success',
      product,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'product was not saved',
    });
  };

  newProduct
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = addProduct;
