var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt =  require('jsonwebtoken');

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

router.post('/login', function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }

        if(!user || (req.body.password !== user.password)){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }

        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});


module.exports = router;
