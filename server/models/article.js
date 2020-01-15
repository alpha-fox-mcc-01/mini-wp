const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({ 
    title: String,
    content: String,
    published: Boolean,
    authorId: {type: Schema.Types.ObjectId, ref: 'User'},
    image: String
}, {timestamps: true});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;