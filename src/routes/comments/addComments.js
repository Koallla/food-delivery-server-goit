const Comments = require('../../db/Schemas/comments');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const addComments = (request, response) => {
  const comment = request.body;

  const newComment = new Comments(comment);

  newComment
    .save()
    .then(comment => {
      sendResponse(comment, response, '201');
    })
    .catch(sendError);
};

module.exports = addComments;
