const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
const usersRouter = require('./controllers/users');

var app = express();

// Setting up Mongoose
const dbName = "test1"
const url = `mongodb+srv://soenapp390:asdzxc@cluster0.efezn.mongodb.net/${dbName}?retryWrites=true&w=majority`

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, connectionParams).then(() => {
  console.log("connected to the db")
}).catch((e) => {
  console.log(e)
})

// Attach middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Static Pages Routes
app.use('/', indexRouter);
app.use('/test', testRouter);

// API Routes
app.use('/rest/api', usersRouter);

module.exports = app;