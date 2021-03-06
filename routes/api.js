var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var pannelController =require('../controllers/pannelController');
var tourTypeController = require('../controllers/tourTypeController');
router.get('/', function (req, res) {
    controller.getAll(function (shirts) {
        res.json(shirts);
    });
});

router.get('/:id', function (req, res) {
    controller.getById(parseInt(req.params.id), function (user) {
        res.json(user);
    });
});




module.exports = router;