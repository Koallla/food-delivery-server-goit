const sendResponse = (users = '', response, status) => {
  response.status(`${status}`);
  response.json({
    status: 'success',
    users,
  });
};

const sendError = (response, text) => {
  response.status(400);
  response.json({
    error: `${text} was not found`,
  });
};

module.exports = { sendResponse, sendError };
