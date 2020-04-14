const startServer = require('./src/server');
const connectToDb = require('./src/db/conectToDb');
const config = require('./config');

startServer(config.port);
connectToDb(config.databaseUrl);
