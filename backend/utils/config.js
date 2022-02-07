require('dotenv').config()
const logger = require('./logger')

// Port
const PORT = normalizePort(process.env.PORT || '3001');

// MongoDB Constants
const PROD_DBNAME = 'jevaisbienaller'
const DEV_DBNAME = 'jevaisbienaller-dev'
const TEST_DBNAME = 'jevaisbienaller-test'
const MONGO_USERNAME = process.env.MONGO_USER; 
const MONGO_PASSWORD = process.env.MONGO_PASS;
const DBNAME = getDbName();
const MONGO_URI = getMongoUri();

logger.info(`Current db name: ${DBNAME}`);

/**
 * 
 * @returns Correct Database Name depending on environment
 */
function getDbName() {
  switch(process.env.NODE_ENV) {
    case 'production':
      return PROD_DBNAME;
      break;
    case 'development':
      return DEV_DBNAME;
      break;
    case 'test':
      return TEST_DBNAME;
      break;
  }
}

/**
 * 
 * @returns Correct Mongo URI depending on environment
 */
function getMongoUri() {
 return `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.efezn.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = {
  PORT,
  DBNAME,
  MONGO_URI
}