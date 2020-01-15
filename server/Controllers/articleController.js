const Article = require('../Models/article')

class ArticleController{

  static createArticle(req, res, next){
    // Belum di pindah, semua proses jwt verify harusnya ada di middleware
    // let token = req.body.token
    // let user = jwt.verify(token, process.env.SECRET);
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
        // console.log(articles);
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
}

module.exports = ArticleController