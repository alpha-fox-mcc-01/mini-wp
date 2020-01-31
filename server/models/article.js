const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, 'Title must be 3 characters long minimal']
  },
  content: {
    type: String,
    required: true,
    minlength: [250, 'Content must be 250 characters long minimal']
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