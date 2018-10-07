var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var pannelController =require('../controllers/pannelController');
var tourTypeController = require('../controllers/tourTypeController');



router.get('/tour-vn', function (req, res) {
    
    tourTypeController.getTourInVN(function (user) {
        var arr=[];
        user.forEach(function(val){
            arr.push({imageUrl:val.imageUrl,name:val.province});
        })
        res.json(arr);
    });
   
});
router.get('/tour-aboard', function (req, res) {
    tourTypeController.getTourAboard( function (user) {
        var arr=[];
        user.forEach(function(val){
            arr.push({imageUrl:val.imageUrl,name:val.country});
        })
        res.json(arr);
    });
});
module.exports = router;