const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API);
// const Api = require('../../models/api');


function index(req, res) {
  const search = {
    // categories: 'boating',
    // location: 'Austin Texas',
    // limit: 5
  }
  client.search(search).then(response=>{
  //    let taco = JSON.parse(response.jsonBody.businesses)
  //    console.log(taco)
    res.render('booze', {
      user: req.user,
      // taco
    });
   }) .catch(e => {
    console.log(e);
  });
    
  };
    
  // function yelpFilter(req,res){
  //   client.search({
  //    categories: 'brunch',
  //     location: 'Austin Texas',
  //     limit: 5
  //   })
  // }

module.exports = {
 index
}