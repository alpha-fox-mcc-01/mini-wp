const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
   image : String,
   title : String,
   content : String,
   publish : Boolean,
   userId : Array
}, {
   timestamps : true
})

const Article = mongoose.model('Article', articleSchema)
module.exports = Article