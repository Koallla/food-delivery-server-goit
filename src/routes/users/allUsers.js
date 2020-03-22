const fs = require('fs');
const path = require('path');

const getUsers = (request, response) => {
  const usersFilePath = path.join(
    __dirname,
    '../../db/users',
    'all-users.json',
  );

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      throw err;
    }
    response
      .set('content-type', 'applycation/json')
      .send(data)
      .end();
  });
};

module.exports = getUsers;
