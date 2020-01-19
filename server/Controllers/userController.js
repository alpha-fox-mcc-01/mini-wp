const User = require('../Models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class UserController {

  static register(req, res, next){
    const hash = bcrypt.hashSync(req.body.password, salt);
    let password = hash
    let data = {
      name : req.body.name,
      email : req.body.email,
      password : password
    }
    User
      .create(data)
      .then(user => {
        console.log(user);
        const token = jwt.sign({
          id : user._id
        }, process.env.SECRET);
        res.status(201).json(token)
      })
      .catch(err => {
        next()
      })
  }

  static login(req, res, next){
    let password = req.body.password
    User
      .findOne({
        email : req.body.email
      })
      .then( user => {
        let authenticated = bcrypt.compareSync(password, user.password);
        console.log(authenticated);
        if(authenticated){
          const token = jwt.sign({
            id : user._id
          }, process.env.SECRET);
          res.status(200).json(token)
        }else {
          next(err)
        }
      })
      .catch(err => {
        next()
      })
  }

}

module.exports = UserController