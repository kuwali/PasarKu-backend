'use strict';

module.exports = function (app) {
    var users = require('../controllers/UsersController');

    app.route('/users')
        .get(users.get_all_users)
        .post(users.create_user);

    app.route('/users/:userEmail')
        .get(users.get_user)
        .put(users.update_user)
        .delete(users.delete_user)
}