const fs = require("fs");
const path = require("path");
const productPart2 = require("./productsPart2.json");

const productsPath1 = path.join(__dirname, "productsPart1.json");

const newProductPath = path.join(__dirname, "all-products.json");

fs.readFile(productsPath1, "utf-8", (err, data) => {
  const product = JSON.parse(data);

  const newProduct = [...product, ...productPart2];

  fs.writeFile(newProductPath, JSON.stringify(newProduct), err => {
    console.log("recording completed");
  });
});
