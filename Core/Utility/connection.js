const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://beimer:beare2020@cluster0.a7vo6.mongodb.net/apidb?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
});
module.exports = mongoose;

