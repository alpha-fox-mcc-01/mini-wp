const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hash = require('../helpers/hash')

const userSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  img_url: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' } })

userSchema.pre('save', function () {
  this.password = hash(this.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User