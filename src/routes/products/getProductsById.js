const Products = require('../../db/Schemas/products');

// Пример запроса
// http://localhost:3001/products/?ids="5e82143719da700480cbb34a, 5e82153a19da700480cbb34b, 5e82155e19da700480cbb34c"

const productsById = (request, response) => {
  const ids = Object.values(request.query)
    .toString()
    .slice(1, -1)
    .replace(/[,]/g, '')
    .split(' ');

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
    .where('_id')
    .in(ids)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = productsById;
