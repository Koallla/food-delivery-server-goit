const logout = (request, response) => {
  console.log('response logout');
  response.status(200).send({
    success: 'OK',
    message: 'logout SUCCESSFULLY',
  });
};

module.exports = logout;
