var express = require('express');
var router = express.Router();
var interests = require('../assets/interests.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(interests);
    res.send(interests);
});

module.exports = router;
