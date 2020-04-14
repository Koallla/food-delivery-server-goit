const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const config = require('../../../config');

app.set('superSecret', config.secret);

const verifyToken = (request, response, next) => {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers['x-access-token'];

  if (token) {
    jwt.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        return response.status(404).json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      } else {
        request.decoded = decoded;
        console.log('authenticate token success');
        next();
      }
    });
  } else {
    response.status(403).send({
      success: false,
      message: 'No token provided.',
    });
  }
};

module.exports = verifyToken;
