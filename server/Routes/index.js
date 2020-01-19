const router = require('express').Router()
const User = require('./user')
const Article = require('./article')


router.use('/users', User)
router.use('/articles', Article)

module.exports = router