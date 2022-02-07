const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const config = require('./utils/config')
const indexRouter = require('./routes/index');
const statusRouter = require('./routes/status');
const usersRouter = require('./controllers/users');
const logger = require('./utils/logger')

var app = express();

// Attach middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setting up Mongoose
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Static Pages Routes
app.use('/', indexRouter);
app.use('/status', statusRouter);

// API Routes
app.use('/rest/api', usersRouter);

module.exports = app;