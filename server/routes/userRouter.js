const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/regis', userController.register)
router.post('/googlesignin', userController.googlesignin)
router.post('/login', userController.login)


module.exports = router