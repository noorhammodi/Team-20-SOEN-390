const express = require('express');
require('express-async-errors');  // enables use of middleware.errorHandler

const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware')
const indexRouter = require('./routes/index');
const statusRouter = require('./routes/status');
const usersRouter = require('./controllers/users');

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
logger.info(`Connected to db: ${config.DBNAME}`)
logger.info(`Listening on port: ${config.PORT}`)


// Static Pages Routes
app.use('/', indexRouter);
app.use('/status', statusRouter);

// API Routes
app.use('/rest/api', usersRouter);

// Custom processing of errorMessage (mostly related to mongoose)
// Must be last loaded middleware

app.use(middleware.errorHandler)
module.exports = app;