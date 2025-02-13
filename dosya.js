var express = require("express");
var server = express();
var routes = require("./routes/routes")
var mongoose = require("mongoose");
const cors = require("cors")


mongoose.connect("mongodb://localhost:27017/test")                                                                     
server.use(express.json());                
server.use("/",routes)                      
server.use(cors())


server.listen(8000, function check(err) {
  if (err) {
    console.log("error");
  } else {
    console.log("basarili");
  }
});







