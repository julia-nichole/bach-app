var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/api/api');


router.post('/', yelpCtrl.yelpFilter);
router.get('/',yelpFilter.index)
module.exports = router;