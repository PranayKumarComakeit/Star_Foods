const mongoose = require('mongoose');
const UserSchema=mongoose.Schema({
    name:{type:String},
    email: {
        type: String,
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
     },
    phonenumber:{type:Number, required:true},
    password:{
        type:String,
        required: true
    },
    passkey:{type:String},
    isAdmin:{type:Boolean, default:false},
    isEmailVerified:{type:Boolean, default:false},
    isActive:{type:Boolean, default:true}
})
const User =  mongoose.model('User', UserSchema);
module.exports = User;