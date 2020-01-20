const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schemaOptions = {
	timestamp: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
}
const articleSchema = new Schema({
	title: {
		type: String,
		required: [ true, 'Title cannot be empty' ]
	},
	article: {
		type: String,
		required: [ true, 'Article cannot be empty' ]
	},
	author: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	imgs: String,
	categories: [ String ],
	created_at: {
		type: Date,
		default: Date.now
	},
	is_published: {
		type: Boolean,
		default: false
	},
	published_at: Date,
	likes: [ {
		type: Schema.Types.ObjectId, ref: 'User',
		default: []
	} ],
	comments: [
		{
			userId: {
				type: Schema.Types.ObjectId, ref: 'User',
			},
			comment: String,
			published_at: {
				type: Date,
				default: Date.now
			}
		}
	]
}, schemaOptions)

const Article = mongoose.model('Article', articleSchema)

module.exports = Article