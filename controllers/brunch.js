
function index(req, res) {
  res.render('brunch', {
    user: req.user,
  });
};
    

module.exports = {
  index
} 
