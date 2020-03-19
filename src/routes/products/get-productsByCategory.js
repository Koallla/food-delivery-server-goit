const fs = require('fs');
const path = require('path');

const filterProduct = (products, category) => {
  return products.filter(product => product.categories.includes(category));
};

const productsById = (request, response) => {
  const category = Object.values(request.query)
    .toString()
    .slice(1, -1);

  const productFilePath = path.join(
    __dirname,
    '../../db/products',
    'all-products.json',
  );
  const products = JSON.parse(fs.readFileSync(productFilePath));
  const filteredProduct = filterProduct(products, category);

  if (filteredProduct.length > 0) {
    response.writeHead(200, {
      'content-type': 'applycation/json',
    });
    const responseMessage = `{
            "status": "success",
            "products": ${JSON.stringify(filteredProduct)}
           }`;
    response.write(responseMessage);
    response.end();
    return;
  } else {
    response.writeHead(404, {
      'content-type': 'applycation/json',
    });
    response.write(`{
          "status": "no products",
          "products": []
         }`);
    response.end();
    return;
  }
};

module.exports = productsById;
