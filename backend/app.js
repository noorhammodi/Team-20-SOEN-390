import express from 'express';

//import database from './routes/index.js';

import router from './routes/index.js';

const app = express();

var cors = require('cors');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

//TODO sequelize for mongo?

app.listen(5000)

module.exports = app;
