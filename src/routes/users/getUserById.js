const User = require('../../db/Schemas/user');

const userById = (request, response) => {
  const id = request.params.id;

  const sendResponse = user => {
    response.status(200);
    response.json({
      status: 'success',
      user,
    });
  };

  User.findById(id)
    .then(sendResponse)
    .catch(err => {
      console.error(err);
    });
};

module.exports = userById;
