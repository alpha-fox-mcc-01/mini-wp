const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UserController {
  static register(req, res, next) {
    const {firstName, lastName, email, password} = req.body;
    User.create({
      firstName,
      lastName,
      email,
      password
    })
      .then(user => {
        let userName = user.firstName;
        res.status(201).json({userName})
      })
      .catch(next)
  }

  static login(req, res, next) {
    const {email, password} = req.body;
    User.findOne({
      email
    })
      .then(user => {
        if(user) {
          const verified = bcrypt.compareSync(password, user.password);
          if(verified) {
            const token = jwt.sign({ _id: user._id }, process.env.SECRET);
            res.status(200).json({
              msg: 'Login successfully',
              token,
              userName: user.firstName
            })
          } else {
            next({
              name: "Bad Request",
              message: 'Email or password wrong',
              status: 400
            })
          }
        } else {
          next({
            name: "Bad Request",
            message: 'Email or password wrong',
            status: 400
          })
        }
      })
      .catch(next)
  }

  static logout(req, res, next) {

  }
}

module.exports = UserController;