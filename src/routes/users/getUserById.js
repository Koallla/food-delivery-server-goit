const User = require('../../db/Schemas/user');
// const { sendError } = require('../Errors/sendErrors');

const userById = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    if (!user) {
      return sendError();
    }

    response.json({
      status: 'success',
      user: user,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: `User was not found`,
    });
  };

  User.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = userById;
