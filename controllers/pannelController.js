var controller = {};

var models = require('../models');

var Sequelize = require('sequelize');



controller.getAll = function (callback) {
    models.Panel
        .findAll()
        .then(function (data) {
            callback(data);
        })
};





module.exports = controller;