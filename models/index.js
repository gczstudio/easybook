var mongoose = require('mongoose');
var config = require("../config");
mongoose.connect(config.db,{
  poolSize: 20,
  useNewUrlParser: true  
},function(err){
  // console.log(err);
  // process.exit(1);
});

exports.NavBar = require('./navBar');
exports.Topics = require('./topics');
exports.SideBar = require('./sideBar');
exports.Authors = require('./authors');
exports.Article = require('./article');