var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/api')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('./search',apiCtrl.yelpFilter);
module.exports = router;
