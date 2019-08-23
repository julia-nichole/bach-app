var mongoose = require('mongoose');
const Schema = mongoose.Schema
//google id 
const userSchema = new Schema ({
    name: String,
    email:{type:String, required: true, },
    password: String,
},{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema);