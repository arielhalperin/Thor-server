var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Interest = require('../models/interest');
var jwt =  require('jsonwebtoken');

router.use('/',function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }

        next();
    });
});

router.patch('/changeUserInterests', function(req, res, next) {

    var decoded= jwt.decode(req.query.token);
    var interests = req.body.interests;
    User.findById(decoded.user._id, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }

        var promiseArr = [];
        user.interests = [];
        for( let interestId of interests){
            promiseArr.push(Interest.findById(interestId)
                .then((data) => {return data})
                .catch((error) => {return false})
            )
        }

        Promise.all(promiseArr)
        .then((interests) => {
            user.interests = interests;
            user.save();
            res.status(200).json({
                message: 'Saved successfully',
                user: user
            });
        }).catch((error)=>{
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        });

    });
});

module.exports = router;