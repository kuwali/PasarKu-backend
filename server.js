'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT;
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var User = require('./api/models/User');
var uristring = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'pug');

var routes = require('./api/routes/routes');
routes(app);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port);

console.log('App running on port: ' + port);