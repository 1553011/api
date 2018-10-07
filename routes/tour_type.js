var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var pannelController =require('../controllers/pannelController');
var tourTypeController = require('../controllers/tourTypeController');


router.get('/tour-vn', function (req, res) {
    tourTypeController.getTourInVN(function (user) {
        res.json(user);
    });
   
});
router.get('/tour-aboard', function (req, res) {
    tourTypeController.getTourAboard( function (user) {
        res.json(user);
    });
});
module.exports = router;