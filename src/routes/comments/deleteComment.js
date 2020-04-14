const Comment = require('../../db/Schemas/comments');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const deleteCommentById = (request, response) => {
  const id = request.params.id;

  Comment.findOneAndDelete({ _id: id })
    .then(comment => {
      sendResponse(comment, response);
    })
    .catch(() => {
      sendError(response, 'Product');
    });
};

module.exports = deleteCommentById;
