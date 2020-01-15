const User = require('../models/user')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');

class userController{

    static register(req, res){
        console.log('==============================')
        
        let acces_token = req.body.pk;
        let authenticated = req.currentUserid


        const obj = {
            name: req.body.name,
            email: req.body.email,
            googleSIgn: false,
            password: req.body.password
        }

        User.create(
            obj
        )
            .then(user => {
                console.log(user);
                
                const token = jwt.sign({ _id: user._id }, process.env.SECRET)
                const name = user.name  
                res.status(200).json({ token, name })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    static login(req, res){
        let email = req.body.email
        let pass = req.body.password

        // console.log(email)
        User.findOne({
           email
        })
        .then(user => {

            if(user){
               let verify = bcrypt.compareSync(pass, user.password);
                if (verify){
                    console.log('verified');  
                    const token = jwt.sign({ _id: user._id }, process.env.SECRET)
                    const name = user.name  

                    res.status(200).json({token, name})
                    // return{ user }
                }
            }
            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    static googlesignin(req, res) {
        let payload

        client.verifyIdToken({
            idToken: req.body.google_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                payload = ticket.getPayload()
                // console.log(payload)
                return User.findOne({ email: payload.email })
            })
            .then(userData => {
                if (!userData) {
                    return User.create({
                        email: payload.email,
                        googleSignIn: true
                    })
                }
                else {
                    return userData
                }
            })
            .then(user => {

                const token = jwt.sign({ _id: user._id }, process.env.SECRET)
                const name = payload.given_name;
                res.status(200).json({ token, name })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }

    
}

module.exports = userController