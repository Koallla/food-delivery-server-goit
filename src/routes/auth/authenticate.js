const jwt = require('jsonwebtoken');
const User = require('../../db/Schemas/user');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const config = require('../../../config');

app.set('superSecret', config.secret);

const errorResp = {
  success: false,
  message: 'Authentication failed.',
};

const passwMatches = (passw1, hash) => bcrypt.compareSync(passw1, hash);

const generateToken = paramsForTokenGeneration => {
  const secretKey = app.get('superSecret');

  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: '31d',
  });
};

const authenticate = (request, response) => {
  const { username, password } = request.body;

  User.findOne({ username }, onFind);

  function onFind(err, user) {
    if (err) throw err;

    const correctPassword = passwMatches(password, user.password);
    const userId = user._id;

    // console.log(correctPassword);

    if (!user || !correctPassword) {
      response.json(errorResp);
      return;
    }

    const payload = {
      password,
      userId,
    };

    const token = generateToken(payload);

    console.log(token);

    response.json({
      success: true,
      message: 'Enjoy your token!',
      token: token,
    });
  }
};

module.exports = authenticate;
