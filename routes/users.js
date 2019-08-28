var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var brunchCtrl = require('../controllers/brunch');
var barsCtrl = require('../controllers/bars');
var boozeCtrl = require('../controllers/booze');
/* GET users listing. */
 router.get('/index', function(req, res, next) {
   res.render('users/index', {title: "Bach Behavior", user: req.user});
 });
 
 router.get('/brunch', brunchCtrl.index) 

 


 router.get('/bars',barsCtrl.index) 


 
 

 router.get('/booze',boozeCtrl.show) 
    

  
  







// router.get('/', userCtrl.index);
// router.get('/new', isLoggedin,userCtrl.new);


// function isLoggedin(req,res,next){
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
  
// }

module.exports = router;
