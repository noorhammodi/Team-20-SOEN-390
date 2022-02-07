const showDb = (url) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);

    dbo.collection("channels").find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}

module.exports = {
  showDb,
}