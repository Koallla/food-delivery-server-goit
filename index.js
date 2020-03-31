const startServer = require('./src/server');
const connectToDb = require('./src/db/conectToDb');
const { port, databaseUrl } = require('./config');

startServer(port);
connectToDb(databaseUrl);
