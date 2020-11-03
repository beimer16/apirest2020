/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/apidb');*/
const mongoose = require('../Utility/connection');
const Schema = mongoose.Schema;
const userModel = new Schema(
{
    _idUser:String,
    nameUser : String,
    lastnameUser: String,
    emailUser:String,
    pwdUser:String
});
const userModelView = mongoose.model("User",userModel);
module.exports = userModelView;
