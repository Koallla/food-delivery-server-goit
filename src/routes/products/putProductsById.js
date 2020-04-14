const Products = require('../../db/Schemas/products');

const updateProduct = (request, response) => {
  const product = request.body;
  const id = request.params.id;

  const sendResponse = newProduct => {
    if (!newProduct) {
      return sendError();
    }

    response.json({
      status: 'success',
      user: newProduct,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such product',
    });
  };

  Products.findOneAndUpdate({ _id: id }, product, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateProduct;

// 5e93027711935124bce4757e, 5e93027711935124bce4757f
