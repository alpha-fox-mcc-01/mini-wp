var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    desc: String,
    img: String,
    author: { type: 'ObjectId', ref: 'User' },
    publish: Boolean,
    createdAt: { type : Date, default: Date.now }
  });
  
  var Article = mongoose.model('Article', articleSchema);

  module.exports = Article;

