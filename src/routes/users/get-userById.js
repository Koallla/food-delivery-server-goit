const fs = require('fs');
const path = require('path');
const url = require('url');

const filterUsers = (users, id) => {
  return users.filter(user => user.id === id);
};

const userById = (request, response) => {
  console.log(request.params.id);

  const id = request.params.id;

  const productFilePath = path.join(
    __dirname,
    '../../db/users',
    'all-users.json',
  );

  const users = JSON.parse(fs.readFileSync(productFilePath));

  const filteredUser = filterUsers(users, id);

  if (filteredUser.length > 0) {
    response.writeHead(200, {
      'content-type': 'applycation/json',
    });
    const responseMessage = `{
            "status": "success",
            "products": ${JSON.stringify(filteredUser)}
           }`;
    response.write(responseMessage);
    response.end();
    return;
  } else {
    response.writeHead(404, {
      'content-type': 'applycation/json',
    });
    response.write(`{
          "status": "not found"
         }`);
    response.end();
    return;
  }
};

module.exports = userById;
