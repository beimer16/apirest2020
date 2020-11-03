const mongoose = require('../Utility/connection');
const Schema = mongoose.Schema;
const postModel = new Schema(
{
    _idPost:String,
    tittlePost: String,
    containtPost: String,
    datecreatePost:String,
    imgPost:String,
    _idUserPost:String
});
const postModelView = mongoose.model("Post",postModel);
module.exports = postModelView;