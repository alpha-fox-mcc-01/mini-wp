const express = require ('express')
const router = express.Router()
const UserRouter = require ('./users')
const ArticleRouter = require ('./articles')

router.use('/users', UserRouter)
router.use('/articles', ArticleRouter)

module.exports = router