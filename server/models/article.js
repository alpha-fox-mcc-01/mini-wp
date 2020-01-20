const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  published: Boolean,
  img_url: String,
  UserId: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' } })

const Article = mongoose.model('Article', articleSchema)

module.exports = Article