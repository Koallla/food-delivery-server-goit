const fs = require('fs');
const path = require('path');

const getProducts = (request, response) => {
  if (request.method === 'GET') {
    const productFilePath = path.join(
      __dirname,
      '../../db/products',
      'all-products.json',
    );

    const products = fs.readFileSync(productFilePath);

    response.writeHead(200, {
      'content-type': 'applycation/json',
    });
    response.write(products);
    response.end();
    return;
  }
};

module.exports = getProducts;
