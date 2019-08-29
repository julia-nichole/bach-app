


function index(req, res) {
    res.render('booze', {
      user: req.user,
    });
  };
    


module.exports = {
 index
}