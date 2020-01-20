const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const aws = require('aws-sdk')
const fs = require('fs')

module.exports = {
  register(req, res) {
    const { username, email, password } = req.body
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.ACCESSKEY,
      secretAccessKey: process.env.SECRETACCESSKEY,
      region: process.env.REGION
    })

    const s3 = new aws.S3();
    const params = {
      ACL: 'public-read',
      Bucket: process.env.BUCKET,
      Body: fs.createReadStream(req.file.path),
      Key: `userAvatar/${req.file.originalname}`
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error occured while trying to upload to S3 bucket', err);
      } else if (data) {
        fs.unlinkSync(req.file.path)
        const locationUrl = data.Location;
        console.log('ini urlnya', locationUrl)
        const img_url = locationUrl || 'https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder-300x300.png'
        User
          .create({ username, email, password, img_url })
          .then(user => {
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            res
              .status(201)
              .json({ msg: 'register success', token, username: user.username, img_url: user.img_url })
          })
          .catch(err => {
            console.log(err)
            res
              .status(500)
              .json({ msg: err.message })
          })
      }
    })
  },

  login(req, res) {
    const { email, password } = req.body
    User.findOne({ email })
      .then(user => {
        if (!user) {
          res
            .status(403)
            .json({ msg: 'Email isn\'t registered' })
        } else {
          const valid = bcryptjs.compareSync(password, user.password)
          if (valid) {
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)
            req.headers.user_token = token
            res
              .status(200)
              .json({ token, username: user.username, img_url: user.img_url })
          } else {
            res
              .status(403)
              .json({ msg: 'Password Invalid' })
          }
        }
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: err.message })
      })
  }
}
