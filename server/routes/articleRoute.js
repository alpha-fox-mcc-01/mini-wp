const express = require('express')
const router = express.Router()
const { articleController } = require('../controllers')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', articleController.getArticles)

router.get('/drafts', authentication, articleController.showDrafts)

router.post('/', authentication, articleController.writeArticle)

router.put('/:id', authentication, authorization, articleController.editArticle)

router.delete('/:id', authentication, authorization, articleController.removeArticle)

router.get('/:id', articleController.getOneArticle)

router.get('/me', authentication, articleController.getUserArticles)

router.patch('/publish', authentication, authorization, articleController.publishArticle)

module.exports = router