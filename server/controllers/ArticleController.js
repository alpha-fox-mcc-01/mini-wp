const Article = require('../models/article');
const jwt = require('jsonwebtoken');

class ArticleController {
  static addArticle(req, res, next) {
    console.log('add controller')
    const {title, content} = req.body;
    Article.create({
      title,
      content,
      published: false,
      userId: req.currentUserId
    })
      .then(article => {
        const articleTitle = article.title
        res.status(201).json({articleTitle})
      })
      .catch(next)
  }

  static showUserArticle(req, res, next) {
    Article.find({
      userId: req.currentUserId,
      published: false
    }).populate('userId', ['firstName', 'lastName'])
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static publishArticle(req, res, next) {
    Article.findOneAndUpdate({_id: req.params.id}, {published: true})
      .then(article => {
        res.status(201).json(article)
      })
      .catch(next)
  }

  static unpublishArticle(req, res, next) {
    Article.findOneAndUpdate({_id: req.params.id}, {published: false})
      .then(article => {
        res.status(201).json(article)
      })
      .catch(next)
  }

  static showPublishArticle(req, res, next) {
    Article.find({
      userId: req.currentUserId,
      published: true
    }).populate('userId', ['firstName', 'lastName'])
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static showPublicArticle(req, res, next) {
    Article.find({
      published: true
    }).populate('userId')
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static viewArticle(req, res, next) {
    Article.findById(req.params.id)
    .populate('userId', ['firstName', 'lastName'])
      .then(article => {
        res.status(200).json(article)
      })
      .catch(next)

  }

  static updateArticle(req, res, next) {
    const {title, content} = req.body;
    Article.findOneAndUpdate({_id: req.params.id}, {
      title,
      content
    })
      .then(article => {
        res.status(201).json({message: 'Update success'})
      })
      .catch(next)
  }

  static deleteArticle(req, res, next) {
    console.log('test')
    Article.findOneAndDelete({_id: req.params.id})
      .then(_ => {
        res.status(200).json({message: 'Delete success'})
      })
      .catch(next)
  }
}

module.exports = ArticleController;