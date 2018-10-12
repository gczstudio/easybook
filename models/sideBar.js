var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  name: String,
  url: String
},{collection:'sidebar'})

var sidebarModel = mongoose.model('sidebar', Schema);


module.exports = sidebarModel;