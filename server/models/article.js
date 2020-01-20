var mongoose = require('mongoose')
var Schema = mongoose.Schema



var articleSchema = new Schema({
    title: {
        type: String,
        required: 'Please fill in article title',
        maxlength: 30
    },
    content : String,
    category : String,
    published: Boolean,
    image : String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true},
},  { timestamps: { createdAt: 'created_at' } })


var Article = mongoose.model('Article', articleSchema)
module.exports = Article