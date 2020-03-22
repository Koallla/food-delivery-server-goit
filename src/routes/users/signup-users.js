const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

const signUpUser = (request, response) => {
  const userName = request.body.username;
  const userFilePath = path.join(__dirname, `../../db/users/all-users.json`);
  const dataUser = Object.assign(request.body, {
    id: shortid.generate(),
  });

  const resSavedUser = data => {
    response.set('content-type', 'applycation/json');

    const responseMessage = `{
                "status": "success",
                "user": ${JSON.stringify(data)}
               }`;
    response
      .status(201)
      .send(responseMessage)
      .end();
    return;
  };

  fs.readFile(userFilePath, (err, array) => {
    // проверка на совпадение имени пользователя
    if (
      array.length > 0 &&
      JSON.parse(array).some(item => item.username === userName)
    ) {
      response
        .status(400)
        .send({ error: 'user exists' })
        .end();
      return;
    } else if (array.length !== 0) {
      const arrayUsers = JSON.parse(array);
      const newUser = [...arrayUsers, dataUser];
      fs.writeFile(userFilePath, JSON.stringify(newUser), err => {
        if (err) throw err;
        resSavedUser(dataUser);
      });
    }
    // Если файл пуст, добавляем пустой массив
    else if (array.length === 0) {
      const dataUserArray = new Array(dataUser);
      fs.writeFile(userFilePath, JSON.stringify(dataUserArray), err => {
        if (err) {
          throw err;
        }
        resSavedUser(dataUser);
      });
    }
  });
};

module.exports = signUpUser;
