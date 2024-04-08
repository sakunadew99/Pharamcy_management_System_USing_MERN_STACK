const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({ 
   
    userRole: String,
    name : String,
    DateOfBirth : String,
    mobile : String,
    email : String,
    username : String,
    password : String,

});

const User = mongoose.model('User', UserSchema);    

module.exports = User;