const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    username: String,
    email: {
      type: String,
      validate: [
        {
          validator: function(email) {
            return User.findOne({email: email})
              .then(user => {
                if (!user) return true
                else return false
              })
              .catch(err => {
                throw new Error(err)
              })
          }
        },
        {
          validator: function(email) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)
          }
        }
      ]  
    },
    password: String,
}, { timestamps: true });

// userSchema.path('email').validate(function(input, done){
//     this.model('User').count({email: input}), function (err, done){
//       if(err) {
//         return done(err.msg)
//       }
//       if (count > 0 ) {
//         this.invalidate('email')
//       } else {
//         done(!count)
//       }
//     }
// }, 'Email has been registered, use another email')
 

// userSchema.path('email').validate(function (email) {
//     let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     if (email.length !== 0) {
//       return emailRegex.test(email);
//     } else {
//       return false
//     }
// }, 'The e-mail provided is invalid')


userSchema.pre('save', function(next) {
    let user = this;
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        else {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        }
    })
}) 

const User = mongoose.model('User', userSchema);
module.exports = User;