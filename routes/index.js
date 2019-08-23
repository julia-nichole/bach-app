var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api/api');
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users');
});
// oauth login route 
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

//oauth callback 
router.get('/oauth2callback',passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


// router.post('./search',apiCtrl.yelpFilter);
module.exports = router;
