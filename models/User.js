const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcryptjs')


const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: [ true, 'Email fields is required' ]
	},
	name: {
		type: String,
		required: [ true, 'Name fields is required' ]
	},
	password: String,
	googleAuth: {
		type: Boolean,
		default: false
	}
})

userSchema.pre('save', function () {
	if (!this.googleAuth) {
		hashed = bcrypt.hashSync(this.password, 5)
		console.log('hashing password: ', hashed)
		this.password = hashed
	} else {
		const random = Math.random()
		console.log(random)
		this.password = random
	}
	next()
})

const User = mongoose.model('User', userSchema)
module.exports = User