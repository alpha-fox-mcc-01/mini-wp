const express = require('express')
const router = express.Router()
const { userController } = require('../controllers')

router.get('/', userController.getOneUser)

router.post('/', userController.newUser)

router.get('/me', userController.getCurrentUser)

module.exports = router