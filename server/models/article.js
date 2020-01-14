const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, 'Title must be 4 characters long minimal']
  },
  content: {
    type: String,
    required: true,
    minlength: [100, 'Content must be 100 characters long minimal']
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  published: Boolean,
  image: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  contentPart: String
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;