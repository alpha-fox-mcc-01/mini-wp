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
            User.find({username: new RegExp('^'+req.query.username+'$', "i")}) 
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
            avatar: req.body.picture
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