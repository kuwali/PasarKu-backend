'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.get_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get_user = function (req, res) {
    User.findOne({
        'email': req.params.email
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_user = function (req, res) {
    User.findOneAndUpdate({
        'email': req.params.email
    }, req.body, {
        new: true
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_user = function (req, res) {
    User.remove({
        'email': req.params.email
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User successfully deleted'
        });
    })
}