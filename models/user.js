var mongoose = require('mongoose');
const Schema = mongoose.Schema
//google id 
const userSchema = new Schema ({
    name: String,
    googleId: String
}, {
    timestamps: true
});

const saveSchema =new Schema({
    categories:String,
    location:String
})

module.exports = mongoose.model('User',userSchema,);