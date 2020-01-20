const express = require('express')
const articleRouter = express.Router()
const { articleController } = require('../controllers')
const authenticated = require('../middlewares/authentication')
const authorized = require('../middlewares/authorization')

articleRouter.use(authenticated)
articleRouter.get('/', articleController.showArticle)
articleRouter.post('/', articleController.addArticle)
articleRouter.put('/:id', authorized, articleController.updateArticle)
articleRouter.delete('/:id', authorized, articleController.deleteArticle)

module.exports = articleRouter