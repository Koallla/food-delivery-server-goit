const fs = require('fs');
const path = require('path');
const newProductPath = path.join(__dirname, 'all-products.json');
const productsPath1 = path.join(__dirname, 'productsPart1.json');
const productPart2 = require('./productsPart2.json');

fs.readFile(productsPath1, 'utf-8', (err, data) => {
  const product = JSON.parse(data);

  const newProduct = [...product, ...productPart2];

  fs.writeFile(newProductPath, JSON.stringify(newProduct), () => {
    console.log('recording completed');
  });
});
