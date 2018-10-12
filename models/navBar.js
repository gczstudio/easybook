var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  id: Number,
  url: String
},{collection:'navbar'})

var navBarModel = mongoose.model('navBar', Schema);


module.exports = navBarModel;