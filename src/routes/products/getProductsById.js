const Products = require('../../db/Schemas/products');
const { sendResponse, sendError } = require('../Errors/sendErrors');

// Пример запроса
// http://localhost:3001/products/?ids="5e8215c119da700480cbb350, 5e82159c19da700480cbb34d, 5e82155e19da700480cbb34c"

const productsById = (request, response) => {
  const ids = Object.values(request.query)
    .toString()
    .slice(1, -1)
    .replace(/[,]/g, '')
    .split(' ');

  Products.find()
    .where('_id')
    .in(ids)
    .then(product => {
      sendResponse(product, response);
    })
    .catch(() => {
      sendError(response, 'Product');
    });
};

module.exports = productsById;
