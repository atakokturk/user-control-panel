var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,                     
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("employees", userSchema);

module.exports = User;
