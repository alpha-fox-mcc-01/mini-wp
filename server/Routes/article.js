const router = require('express').Router()
const Article = require('../Controllers/articleController')
const authentication = require('../Middlewares/authentication')
const authorization = require('../Middlewares/authorization')

router.get('/', Article.getAll)
router.get('/user', authentication, Article.getByUserId)
router.post('/', authentication ,Article.createArticle)
router.delete('/:id', authentication, authorization, Article.deletePost)
/*

*/

module.exports = router