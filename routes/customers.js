var express = require('express');
var router = express.Router();
var customers = require('../assets/customers.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(customers);
});

module.exports = router;
