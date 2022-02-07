const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const mongodb = require('../utils/mongodb')
  const config = require('../utils/config')
  // mongodb.showDb(config.MONGO_URI)
  res.sendFile("./templates/restapi.html", { root: __dirname })
});

module.exports = router;