const User = require('../models/userModel')
let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class UserController {
   static register(req, res, next) {

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.password, salt);
      let hashPassword = hash //pindah hashing di model nanti

      let newData = {
         name: req.body.name,
         email: req.body.email,
         password: hashPassword
      }
      User.create(newData)
         .then(data => {
            res.status(201).json(data)
         })
         .catch(err => {
            next()
         })
   }

   static login (req, res, next) {
      User.findOne({email : req.body.email})
         .then(data => {
            if (data) {
               console.log(data);
               let verified = bcrypt.compareSync(req.body.password, data.password) //harus nya bcrypt di model
               if (verified) {
                  const userId = data._id
                  const token = jwt.sign({id : userId}, process.env.SECRET)
                  res.status(200).json({token, name : data.name, userId : userId})
               }
               else {
                  console.log(`email / password wrong`);
                  next()
               }
            }
         })
         .catch (err => {
            console.log(`email / password not found`);
            next()
         })
   }
}

module.exports = UserController