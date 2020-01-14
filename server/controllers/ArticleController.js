const Article = require('../models/article');
const jwt = require('jsonwebtoken');

class ArticleController {
  static addArticle(req, res, next) {
    const {title, content} = req.body;
    let contentPart = "";
    for(let i = 0; i < 197; i++) {
      contentPart += content[i]
    }
    contentPart += '...';
    Article.create({
      title,
      content,
      published: false,
      userId: req.currentUserId,
      contentPart
    })
      .then(article => {
        const articleTitle = article.title
        res.status(201).json({articleTitle})
      })
      .catch(next)
  }

  static showUserArticle(req, res, next) {
    Article.find({
      userId: req.currentUserId
    }).populate('userId', 'firstName')
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static showPublishArticle(req, res, next) {
    Article.find({
      published: true
    }).populate('userId')
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static updateArticle(req, res, next) {
    Article.findById(req.params.id)
  }

  static deleteArticle(req, res, next) {
    Article.findById(req.params.id)
  }
}

module.exports = ArticleController;