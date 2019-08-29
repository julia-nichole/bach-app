const User = require('../models/user');
 
module.exports = {
    index
};

function index(req,res,next){
    User.find({}, function (err, user){
        res.render('users/index',{
          users,
          user: req.user,
          name: req.query.name,
        });
    });
}