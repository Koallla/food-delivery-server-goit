const User = require('../../db/Schemas/user');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const deleteUserById = (request, response) => {
  const id = request.params.id;

  User.findOneAndDelete({ _id: id })
    .then(user => {
      sendResponse(user, response, '200');
    })
    .catch(response => {
      sendError(response, 'User');
    });
};

module.exports = deleteUserById;
