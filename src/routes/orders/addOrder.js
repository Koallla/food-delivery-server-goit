const Order = require('../../db/Schemas/orders');

const addOrder = (request, response) => {
  const order = request.body;

  const newOrder = new Order(order);

  const sendResponse = order => {
    response.json({
      status: 'success',
      order,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not saved',
    });
  };

  newOrder
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = addOrder;

// {
//     "creator": "5e809d2461a068086023f885",
//     "productsList": [
//       {
//         "product": 19112831,
//         "type": "XXL",
//         "itemsCount": 50
//       }
//     ],
//     "deliveryType": "delivery",
//     "deliveryAdress": "Ukraine",
//     "sumToPay": "600",
//     "status": "inProgress"
//   }
