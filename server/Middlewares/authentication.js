const User = require('../Models/user')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  let access_token = req.headers.access_token
  const user = jwt.verify(access_token, process.env.SECRET)
  User
    .findById({
      _id : user.id
    })
    .then( user => {
      console.log(user);
      if(user){
        req.currentUserId = user.id
        next()
      }else {
        res.status(401).json(err)
      }
    })
    .catch( err => {
      console.log(err);
      res.status(500).json(err)
    })
}