var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  slug: String,
  nickname: String,
  avatar_source: String,
  nickname: String,
  total_likes_count: Number,
  total_wordage: Number,
  is_following_user: Boolean,
},{collection:'authors'})

var authorsModel = mongoose.model('authors', Schema);


module.exports = authorsModel;