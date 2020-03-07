const fs = require('fs');
const path = require('path');

const signUpRoute = (request, response) => {
  if (request.method === 'POST') {
    request.on('data', data => {
      const userFilePath = path.join(
        __dirname,
        '../../db/users',
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
};

module.exports = signUpRoute;
