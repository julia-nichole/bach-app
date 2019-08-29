var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    categories:String,
    location:String,
    rating: Number,
    address: String 
})

module.exports = mongoose.model('yelp',saveSchema);