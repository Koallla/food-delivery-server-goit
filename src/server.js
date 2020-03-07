const http = require('http');
const fs = require('fs');
const path = require('path');

const requestHandler = (request, response) => {
  if (request.method === 'GET') {
    if (request.url == '/products') {
      const productFilePath = path.join(
        __dirname,
        './db/products/',
        'all-products.json',
      );

      const products = fs.readFileSync(productFilePath);

      response.writeHead(200, {
        'content-type': 'applycation/json',
      });
      response.write(products);
      response.end();
      return;
    } else {
      response.write('<h2>Not found</h2>');
      response.end();
    }
  }

  if (request.method === 'POST') {
    if (request.url == '/signup') {
      request.on('data', data => {
        const userFilePath = path.join(
          __dirname,
          './db/users',
          'username.json',
        );

        fs.appendFile(userFilePath, data, err => {
          if (err) {
            throw err;
          }
        });

        response.writeHead(201, {
          'content-type': 'applycation/json',
        });
        const responseMessage = `{
          "status": "success", 
          "user": ${data}
         }`;
        response.write(responseMessage);
        response.end();
        return;
      });
    }
  }
};

const startServer = port => {
  const server = http.createServer(requestHandler);

  server.listen(port, err => {
    if (err) {
      return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
  });
};

module.exports = startServer;
