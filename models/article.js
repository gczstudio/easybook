var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  title: String,
  des: String,
  author: String,
  nickname: String,
  discuss: String,
  point: String,
  money: String,
  url: String,
},{collection:'article'})

var articleModel = mongoose.model('article', Schema);


module.exports = articleModel;