const Comments = require('../../db/Schemas/comments');
const { sendResponse, sendError } = require('../Errors/sendErrors');

const getCommentsByProductId = (request, response) => {
  const id = request.query.productId.toString().slice(1, -1);

  Comments.find()
    .where('product')
    .in(id)
    .then(comments => {
      if (!comments.length) {
        response.json({
          status: 'success',
          comments: [],
        });
        return;
      }
      sendResponse(comments, response);
    })
    .catch(() => {
      sendError(response, 'Comments');
    });
};

module.exports = getCommentsByProductId;
