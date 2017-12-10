/**
 * Created by 310289601 on 10/12/2017.
 */
var express = require('express');
var router = express.Router();
var ContactUsMessage = require('../models/contact-us-message');

/* GET users listing. */
router.post('/', function(req, res, next) {

    var message = new ContactUsMessage({
        email: req.body.email,
        message: req.body.message
    });

    message.save(function(err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }

        res.status(200).json({
            message: "message saved",
            obj: message._id
        });
    });
});

module.exports = router;