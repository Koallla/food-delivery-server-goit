const Products = require('../../db/Schemas/products');

// Пример запроса
// http://localhost:3001/products/?category="superpizza"

const productsById = (request, response) => {
  const category = Object.values(request.query)
    .toString()
    .slice(1, -1);

  console.log(category);

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
    .where('categories')
    .in(category)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = productsById;
