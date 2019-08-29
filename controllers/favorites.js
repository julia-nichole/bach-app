function index(req, res) {
    res.render('favorites', {
      user: req.user,
    });
  };
      
  
  module.exports = {
    index
  } 