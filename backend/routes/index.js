const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const mongodb = require('../utils/mongodb')
  const config = require('../utils/config')
  res.sendFile("./templates/restapi.html", { root: __dirname })
});

module.exports = router;