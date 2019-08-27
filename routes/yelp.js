var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/api/api');


router.post('/', yelpCtrl.yelpFilter);

module.exports = router;