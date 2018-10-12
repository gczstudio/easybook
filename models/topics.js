var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  name: String,
  url: String
},{collection:'topics'})

var topicsModel = mongoose.model('topics', Schema);


module.exports = topicsModel;