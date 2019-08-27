var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');
/* GET users listing. */
 router.get('/', function(req, res, next) {
   res.render('');
 });
 
// router.get('/', userCtrl.index);
// router.get('/new', isLoggedin,userCtrl.new);


// function isLoggedin(req,res,next){
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
  
// }

module.exports = router;
