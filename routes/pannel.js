var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var pannelController =require('../controllers/pannelController');
var tourTypeController = require('../controllers/tourTypeController');


router.get('/', function (req, res) {
    pannelController.getAll(function (user) {
        res.json({
            user
        });
    });
});

module.exports = router;