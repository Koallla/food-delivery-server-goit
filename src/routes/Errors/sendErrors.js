const sendResponse = (item, response, status = '200') => {
  response.status(`${status}`);
  response.json({
    status: 'success',
    item,
  });
};

const sendError = (response, text) => {
  response.status(400);
  response.json({
    error: `${text} was not found`,
  });
};

module.exports = { sendResponse, sendError };
