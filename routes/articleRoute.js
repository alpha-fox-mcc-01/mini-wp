const Router = require('express').Router()

const ArticleController = require('../controllers/articleController')
const authenticate = require('../middlewares/authenticate')
const authorizeArticle = require('../middlewares/authorizeArticles')

// get all published articles
Router.get('/', ArticleController.getAll)
Router.get('/mine', authenticate, ArticleController.fetchMine)
Router.post('/', authenticate, ArticleController.createArticle)
Router.delete('/', authenticate, authorizeArticle, ArticleController.removeArticle)
Router.patch('/', authenticate, authorizeArticle, ArticleController.publish)
Router.put('/', authenticate, authorizeArticle, ArticleController.updateArticle)
Router.patch('/like', authenticate, ArticleController.likeArticle)
Router.patch('/comment', authenticate, ArticleController.commentArticle)

module.exports = Router