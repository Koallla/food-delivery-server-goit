const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

const signUpUser = (request, response) => {
  const userName = request.body.username;
  const userFilePath = path.join(__dirname, `../../db/users/all-users.json`);

  const dataUser = Object.assign(request.body, {
    id: shortid.generate(),
  });

  fs.readFile(userFilePath, (err, array) => {
    // добавляем пустой массив
    // if (array.length === 0) {
    //   const arr = JSON.stringify(new Array());

    //   fs.writeFileSync(userFilePath, arr, err => {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log('added array');
    //   });
    // }

    // проверка на совпадение имени пользователяelse
    if (
      array.length > 0 &&
      JSON.parse(array).some(item => item.username === userName)
    ) {
      response.send('user exists');
      response.end();
      return;
    } else if (array.length !== 0) {
      const arrayUsers = JSON.parse(array);
      const newUser = [...arrayUsers, dataUser];
      fs.writeFileSync(userFilePath, JSON.stringify(newUser), err => {
        if (err) {
          throw err;
        }

        response.writeHead(201, {
          'content-type': 'applycation/json',
        });

        const responseMessage = `{
                      "status": "success",
                      "user": ${JSON.stringify(dataUser)}
                     }`;
        response.write(responseMessage);
        response.end();
        return;
      });
    } else if (array.length === 0) {
      const dataUserArray = new Array(dataUser);
      console.log(dataUserArray);
      fs.writeFileSync(userFilePath, JSON.stringify(dataUserArray), err => {
        if (err) {
          throw err;
        }

        response.writeHead(201, {
          'content-type': 'applycation/json',
        });

        const responseMessage = `{
                      "status": "success",
                      "user": ${JSON.stringify(dataUser)}
                     }`;
        response.write(responseMessage);
        response.end();
        return;
      });
    }
  });
};

module.exports = signUpUser;
