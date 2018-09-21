var controller = {};

var models = require('../models');

var Sequelize = require('sequelize');



controller.getAll = function (callback) {
    models.Data
        .findAll()
        .then(function (data) {
            callback(data);
        })
};

controller.getById = function (id, callback) {
    models.Data
        .findOne({
            where: {
                id: id
            },
        
        })
        .then(function (shirt) {
            callback(shirt);
        });
};


controller.count = function ( callback) {
    models.Data
        .count()
        .then(function (c) {
            callback(c);
        });
};


module.exports = controller;