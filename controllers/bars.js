




function index(req, res) {
  res.render('bars', {
    user: req.user,
  });
};

module.exports = {
   index
}