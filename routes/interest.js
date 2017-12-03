var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Interest.find()
        .exec(function(err, interests){
            if(err){
                return res.status(500).json({
                    title: 'An error Occured',
                    error: err
                });
            }

            res.status(200).json({
                message: "Success",
                obj: interests
            });
        });
});

module.exports = router;
