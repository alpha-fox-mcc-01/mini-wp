const express = require('express')
const userRouter = express.Router()
const { userController } = require('../controllers')
const multer = require('multer')

userRouter
  .route('/register')
  .post(multer({ dest: 'temp/', limits: { fieldSize: 4 * 1024 * 1024 } }).single('avatar'), userController.register)

userRouter.post('/login', userController.login)

module.exports = userRouter