const MongoClient = require('mongodb').MongoClient;
const config = require('./config')
const logger = require('./logger')

const showDb = () => {
  MongoClient.connect(config.MONGO_URI, function (err, db) {
    if (err) throw err;
    var dbo = db.db(config.DBNAME);

    dbo.collection("channels").find().toArray(function (err, result) {
      if (err) throw err;
      logger.info(result);
      db.close();
    });
  });
}

module.exports = {
  showDb,
}