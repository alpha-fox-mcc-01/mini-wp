const { User } = require('../models')
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    let token = req.headers.access_token;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(400).json({error: 'Please sign in first'})
        } else {
            User.findById(decoded._id)
                .then(data => {
                    if (data) {
                        req.currentUserId = decoded._id;
                        next()
                    } else {
                        res.status(400).json({error: 'User associated to token is no longer valid'})
                    }
                })
                .catch(err => {
                    res.status(500).json({error: 'Internal Server Error!'})
                })
        }
    })
}