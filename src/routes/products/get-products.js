const fs = require('fs');
const path = require('path');

const getProducts = (request, response) => {
  const productFilePath = path.join(
    __dirname,
    '../../db/products',
    'all-products.json',
  );

  fs.readFile(productFilePath, (err, data) => {
    if (err) {
      throw err;
    }

    response
      .set('content-type', 'applycation/json')
      .send(data)
      .end();
  });
};

module.exports = getProducts;