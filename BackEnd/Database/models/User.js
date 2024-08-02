const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phonenumber:Number,
})

const UserSchema = mongoose.model("User",User);

module.exports = UserSchema;