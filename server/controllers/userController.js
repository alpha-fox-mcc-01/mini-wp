const { User } = require('../models')
module.exports = {
    getCurrentUser(req, res, next) {
        User.findById(req.currentUserId)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    getOneUser(req, res, next) {
        if (req.query.userId) {
            User.findById(req.query.userId)
                .then(data => {
                    res.status(200).json(data)
                })
                .catch(err => {
                    console.log(err.message)
                    next(err)
                })
        } else if (req.query.username) {
            User.find({username: {$regex: req.query.username, $options:'i'}}) 
                .then(data => {
                    res.status(200).json(data)
                })
                .catch(err => {
                    console.log(err.message)
                    next(err)   
                })
        }
    },
    newUser(req, res, next) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    }
}