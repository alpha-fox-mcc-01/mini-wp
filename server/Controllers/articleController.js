const Article = require('../Models/article')
const User = require('../Models/user')
const jwt = require('jsonwebtoken');

class ArticleController{

  static createArticle(req, res, next){
    let token = req.body.token
    let user = jwt.verify(token, process.env.SECRET);
    let data = {
      title : req.body.title,
      content : req.body.content,
      authorId : user.id
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
      .then( articles => {
        res.status(200).json(articles)
      })
      .catch( err => {
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
}

module.exports = ArticleController