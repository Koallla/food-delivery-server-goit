const User = require('../../db/Schemas/user');

const deleteUserById = (request, response) => {
  const id = request.params.id;

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

  User.findOneAndDelete(id)
    .then(user => {
      sendResponse(user);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = deleteUserById;
