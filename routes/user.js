var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.post('/', function(req, res, next) {

    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        avatar: req.body.avatar
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }

        res.status(201).json({
            message: "User created",
            obj: result
        });
    });
});

module.exports = router;
