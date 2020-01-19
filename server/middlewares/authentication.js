const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  const userToken = req.headers.token
  if(userToken) {
    const authenticated = jwt.verify(userToken, process.env.SECRET)
    if (authenticated) {
      req.currentUserId = authenticated._id
      User.findById({_id: authenticated._id})
      .then(user => {
        if(user) {
          next()
        } else {
          next({
            name: "Bad Request",
            message: 'Authentication Error',
            status: 400
          })
        }
      })
      .catch(next)
    }
    else {
      next({
        name: "Bad Request",
        message: 'Invalid token',
        status: 401
      })
    }
  }
  else {
    next({
      name: "Bad Request",
      message: 'No access token',
      status: 400
    })
  }
}