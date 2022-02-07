const PORT = normalizePort(process.env.PORT || '3001');

const DBNAME = 'test1'
const MONGO_URI = `mongodb+srv://soenapp390:asdzxc@cluster0.efezn.mongodb.net/${DBNAME}?retryWrites=true&w=majority`

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