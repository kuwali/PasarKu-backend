'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var User = require('./api/models/User');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/pasarku');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('App running on port: ' + port);