var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

  var userSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    email: String,
    password:   String,
    googleSIgn: { type : Boolean, default: false }
  });

  userSchema.pre('save', function(next) {
    if (this.password){
        var hash = bcrypt.hashSync(this.password, salt);
        this.password = hash
        next();
    }
  });

  var User = mongoose.model('User', userSchema);

  module.exports = User;