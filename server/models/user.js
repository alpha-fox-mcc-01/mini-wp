var mongoose = require('mongoose')
var Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

var userSchema = new Schema({
    username: String,
    email: {
        type : String, 
        trim : true,
        required: 'Email address is required', 
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      minlength: [4, 'Password too short. Min. length 4']
    }
})



userSchema.pre('save', function(next){
    let password = this.password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    this.password = hash
    next()
})

var User = mongoose.model('User', userSchema)

userSchema.path('email').validate( async (input) => {
  const emailCount = await mongoose.models.User.countDocuments({email: input });
  if (emailCount) {
    return false
  }
}, 'Email already exists');


module.exports = User

