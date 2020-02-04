const express = require('express')
const router = express.Router()
const { userController } = require('../controllers')

const authentication = require('../middlewares/authentication')

router.get('/', userController.getOneUser)

router.post('/', userController.newUser)

router.get('/me', authentication, userController.getCurrentUser)

router.post('/signin', userController.signIn)

router.post('/google-sign-in', userController.googleSignIn)

module.exports = router