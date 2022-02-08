const express = require('express');
const oldapiRouter = express.Router();
const User = require("../models/user")
const logger = require('../utils/logger')
const MongoClient = require('mongodb').MongoClient;
const config = require('../utils/config')

const dbName = config.DBNAME
const url = config.MONGO_URI
const collectionName = 'users'

oldapiRouter.post('/add-user', function (req, res) {
  const hin = req.body.hin
  const email = req.body.email
  const password = req.body.password
  const role = req.body.role
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  if (hin == '' || firstName == '' || email == '' || password == '' || lastName == '' || role == '') {
    res.send("error: missing fields")
  }
  else {
    const payload = new User()
    payload.firstName = firstName
    payload.email = email
    payload.hin = hin
    payload.password = password
    payload.role = role
    payload.lastName = lastName

    payload.save((err, data) => {
      if (err) {
        logger.info(err)
        res.send("error: email or health insurance number already taken ")
      }
      else {
        res.send("perfect: form sent")
        logger.info(data)
      }
    })
  }
});

oldapiRouter.get('/users', function (req, res) {
  return_query(function (result) {
    // Only output to npm console (not browser console) because it exposes password
    logger.info(result)
    res.send('Sent result to console.')
  });
});

oldapiRouter.post('/login', function (req, res) {
  if (req.body.email == null || req.body.password == null) {
    res.send("error: field missing")

  }
  else {
    return_query_load(function (result) {
      if (result[0] != undefined && result[0].password == req.body.password) {
        res.send(result)
      }
      else {
        res.send("error: invalid password")
      }
    }, req.body.email);
  }
});

function return_query(my_callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const db_var = db.db(dbName);
    db_var.collection(collectionName).find().toArray(function (err, result) {
      if (err) throw err;
      logger.info(result);
      my_callback(result)
      db.close()
    });
  });
};

function return_query_load(my_callback, load) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const db_var = db.db(dbName);
    db_var.collection(collectionName).find({ email: load }).toArray(function (err, result) {
      if (err) throw err;
      logger.info(result);
      my_callback(result)
      db.close()
    });
  });
};

module.exports = oldapiRouter;