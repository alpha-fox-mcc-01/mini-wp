const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

class userController {

    static register(req, res, next) {
        console.log('masuk method controller')
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(result => {
                res.status(201).json({message: 'Registration success!'})
            })
            .catch(err => {
                next(err)
            })
    }


    static login(req, res, next) {
        User.findOne({email: req.body.email})
            .then(result => {
                if (result) {
                   let checkPassword = bcrypt.compareSync(req.body.password, result.password)
                   if (checkPassword) {
                       let access_token = jwt.sign({ id: result._id}, process.env.SECRET)
                       console.log(access_token, 'masuk login')
                       res.status(200).json({access_token : access_token, name: result.username})
                   } else {
                       next({name:'Bad request', statusCode:'400', message: 'Email/Password wrong'})
                   }
                } else {
                    next({name:'Bad request', statusCode:'400', message: 'Email/Password wrong'})
                }
            })
            .catch(err => {
                next(err)
            })
    }


    static googleSignIn(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let payload
        client.verifyIdToken({
            idToken : req.body.google_token,
            audience: process.env.CLIENT_ID
        }) 
            .then(ticket => {
                payload = ticket.getPayload()
                return User.findOne({email: payload.email})
            })
            .then(user => {
                if (user) {
                    return user
                } else {
                    return User.create({
                        username: payload.name,
                        email: payload.email,
                        password: process.env.DEFAULT_PASSWORD,
                    })
                }
            })
            .then(loggedinUser => {
                const access_token = jwt.sign({
                    id: loggedinUser._id,
                }, process.env.SECRET)
                
                res.status(200).json({access_token : access_token, userId: loggedinUser._id})
            })
            .catch(err => {
                console.log(err)
                next(err)
            })

    }

}



module.exports = userController