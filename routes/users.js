var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
var brunchCtrl = require('../controllers/brunch');
var barsCtrl = require('../controllers/bars');
var boozeCtrl = require('../controllers/booze');
var favoritesCtrl =require('../controllers/favorites')
/* GET users listing. */  
 router.get('/index', function(req, res, next) {
   res.render('users/index', {title: "Bach Behavior", user: req.user});
 });
 
 router.get('/brunch', brunchCtrl.index) 

 


 router.get('/bars',barsCtrl.index) 


 router.get('/favorites',favoritesCtrl.index) 
 

 router.get('/booze',boozeCtrl.index) 
    

  
  



//  function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }





module.exports = router;
