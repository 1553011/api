var controller = {};

var models = require('../models');

var Sequelize = require('sequelize');



controller.getAll = function (callback) {
    models.Tour_Type
        .findAll()
        .then(function (data) {
            callback(data);
        })
};

controller.getTourInVN = function (callback) {
    models.Tour_Type
        .findAll({
            where:{
                country: {
                    [Sequelize.Op.like]:"việt%nam"
                }
            }
        })
        .then(function (shirt) {
            callback(shirt);
        });
};


controller.getTourAboard = function (callback) {
    models.Tour_Type
        .findAll({
            where: {
                country: {
                    [Sequelize.Op.notLike]:"việt%nam"
                }           
            }   
        })
        .then(function (shirt) {
            callback(shirt);
        });
};



module.exports = controller;