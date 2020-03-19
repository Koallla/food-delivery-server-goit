const fs = require('fs');
const path = require('path');
const url = require('url');

const getId = url => {
  const lastIndex = url.lastIndexOf('/');

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const filterProducts = (products, id) => {
  return products.filter(product => product.id === id);
};

const productsById = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const id = Number(getId(parsedUrl.path));

  const productFilePath = path.join(
    __dirname,
    '../../db/products',
    'all-products.json',
  );

  const products = JSON.parse(fs.readFileSync(productFilePath));
  const filteredProduct = filterProducts(products, id);

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
