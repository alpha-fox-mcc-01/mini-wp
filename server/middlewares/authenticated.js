const jwt = require("jsonwebtoken");
const User = require('../models/user')

module.exports = 
    function (req, res, next) {

        // console.log(req.headers,'====')
        const { access_token } = req.headers;
        if (access_token) {
            const authenticated = jwt.verify(access_token, process.env.SECRET);
            if (authenticated) {
                req.currentUserid = authenticated;
                //FIND email
                User.findOne({ _id: authenticated })
                .then(data =>{
                    if(data){
                        next();
                    }
                })
                .catch(err =>{
                res.status(500).json(err)
                    
                })
            } else {
                res.status(400).json({
                    msg: `Access token invalid`
                })
            }
        } else {
            res.status(400).json({
                msg: `Access token not found`
            })
        }
    }
