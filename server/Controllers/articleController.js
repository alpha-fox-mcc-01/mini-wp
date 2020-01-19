const Article = require('../Models/article')

class ArticleController{

  static createArticle(req, res, next){
    let data = {
      title : req.body.title,
      content : req.body.content,
      authorId : req.currentUserId
    }
    Article
      .create(data)
      .then( article => {
        res.status(201).json({article})
      })
      .catch(err => {
        next()
      })
  }

  static getAll(req, res, next) {
    Article
      .find()
      .populate('authorId', 'name')
      .then( articles => {
        res.status(200).json(articles)
      })
      .catch( err => {
        next()
      })
  }

  static getByUserId(req, res, next){
    Article
      .find({
        authorId : req.currentUserId
      })
      .populate('authorId', 'name')
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(err =>{
        next()
      })
  }

  static deletePost(req, res, next){
    Article
      .deleteOne({
        _id : req.params.id
      })
      .then(() => {
        res.status(200).json({msg : 'deleted'})
      })
      .catch(err => {
        next()
      })
  }

  static getById(req, res, next) {
    Article
      .findOne({
        _id : req.params.id
      })
      .populate('authorId', 'name')
      .then( article => {
        res.status(200).json(article)
      })
      .catch(err =>{
        next()
      })
  }

  static updateArticleById(req, res, next){
    Article
      .findOneAndUpdate({
        _id : req.params.id
      }, {
        title : req.body.title,
        content : req.body.content
      })
      .then( article => {
        res.status(200).json(article)
      })
      .catch(err => {
        next()
      })
  }
}

module.exports = ArticleController