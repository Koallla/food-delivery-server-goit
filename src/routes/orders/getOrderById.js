const Order = require('../../db/Schemas/orders');

const getOrderById = (request, response) => {
  const id = request.params.id;

  const sendResponse = order => {
    response.status(200);
    response.json({
      status: 'success',
      order,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not found',
    });
  };

  Order.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getOrderById;
