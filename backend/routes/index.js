var express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile("./templates/restapi.html", { root: __dirname })
});

module.exports = router;