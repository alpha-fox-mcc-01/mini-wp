const router = require('express').Router()
const Article = require('../Controllers/articleController')

router.post('/', Article.createArticle)
router.get('/', Article.getAll)
router.delete('/:id', Article.deletePost)


module.exports = router