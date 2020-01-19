const express = require ('express')
const router = express.Router()
const ArticleController = require ('../controllers/ArticleController')
const authentication = require ('../middlewares/authentication')
const authorization = require ('../middlewares/authorization')

router.get('/', ArticleController.getAll) 
router.get('/:articleId', authentication, ArticleController.read)
router.get('/:userId')
router.post('/', authentication, ArticleController.add)
router.delete('/:id', authentication, authorization, ArticleController.delete)
router.put('/:id', authentication, authorization, ArticleController.update)

module.exports = router