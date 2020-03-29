const User = require('../../db/Schemas/user');

const allUser = (request, response) => {
  const sendResponse = user => {
    response.status(200);
    response.json({
      status: 'success',
      user,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'Users was not found',
    });
  };

  User.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = allUser;
