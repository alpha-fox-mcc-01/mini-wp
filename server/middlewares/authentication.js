const { User } = require('../models')
const jwtAccess = require('../jwtAccess')
module.exports = (req, res, next) => {
    let token = req.headers.access_token;
    let userVerified = null
    jwtAccess.verify(token)
        .then(decoded => {
            userVerified = decoded
            return User.findById(decoded._id)
        }) 
        .then(data => {
            if (data) {
                req.currentUserId = userVerified._id;
                next()
            } else {
                let message = {
                    code: 400,
                    message: 'User associated to token is no longer valid'
                }
                throw message
            }
        })
        .catch(err => {
            if (err.code) res.status(400).json({error: 'User is not verified'})
            else res.status(500).json({error: 'Internal Server Error!'})
        })
}