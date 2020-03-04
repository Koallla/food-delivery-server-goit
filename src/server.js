const http = require("http");
const fs = require("fs");
const path = require("path");

const requestHandler = (request, response) => {
  if (request.url === "/home" || request.url === "/") {
    response.write("<h2>Hello everyone!!!</h2>");
    return;
  } else if (request.url == "/products") {
    const productFilePath = path.join(
      __dirname,
      "./db/products/",
      "all-products.json"
    );
    const products = fs.readFileSync(productFilePath);

    response.writeHead(200, {
      "content-type": "applycation/json"
    });
    response.write(products);
    response.end();
    return;
  } else {
    response.write("<h2>Not found</h2>");
    response.end();
  }
};

const startServer = port => {
  const server = http.createServer(requestHandler);

  server.listen(port, err => {
    if (err) {
      return console.log("something bad happened", err);
    }
    console.log(`server is listening on ${port}`);
  });
};

module.exports = startServer;
