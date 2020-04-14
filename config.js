const dbUser = 'Koala';
const dbPassword = 290922;

const config = {
  port: 3001,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-ci47a.mongodb.net/homeworkDB`,
  secret: 'secret-key',
};

module.exports = config;
