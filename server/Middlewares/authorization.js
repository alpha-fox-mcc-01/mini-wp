const Article = require('../Models/article')

module.exports = function (req, res, next) {
  // console.log(req.params.id);
  
  Article
    .findOne({
      _id : req.params.id
    })
    .then( article => {
      // console.log(article, 'nih article');
      if(article){
        if(article.authorId == req.currentUserId){
          next()
        }else {
          res.status(401).json({ msg : 'Unauthorized' })
        }
      }else {
        res.status(404).json({ msg : 'Article not found' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}