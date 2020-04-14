const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../../../config');
const User = require('../../db/Schemas/user');

app.set('superSecret', config.secret);

const getCurrentUser = (request, response) => {
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

  const token =
    request.body.token ||
    request.query.token ||
    request.headers['x-access-token'];

  jwt.verify(token, app.get('superSecret'), function (err, decoded) {
    const id = decoded.userId;
    User.findById(id).then(sendResponse).catch(sendError);
  });
};

module.exports = getCurrentUser;
