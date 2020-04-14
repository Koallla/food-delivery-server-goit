const User = require('../../db/Schemas/user');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const allUser = (request, response) => {
  User.find()
    .then(users => {
      sendResponse(users, response, '200');
    })
    .catch(() => {
      sendError(response, 'Users');
    });
};

module.exports = allUser;
