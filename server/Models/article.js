const moongose = require('mongoose')
const Schema = moongose.Schema

const articleSchema = new Schema({
  image : String,
  title : String,
  content : String,
  published : Boolean,
  authorId : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  } 
}, {
  timestamps : true
})

const Article = moongose.model('Article', articleSchema)

module.exports = Article