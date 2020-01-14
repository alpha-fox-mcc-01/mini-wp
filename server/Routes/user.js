const router = require('express').Router()
const User = require('../Controllers/userController')


router.post('/login', User.login)
router.post('/register', User.register)

module.exports = router