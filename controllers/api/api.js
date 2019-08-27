const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API);
 
module.exports = {
    yelpFilter
}

function yelpFilter(req,res){
        client.search({
         categories: 'brunch',
          location: 'Austin Texas',
          limit: 5
        })}