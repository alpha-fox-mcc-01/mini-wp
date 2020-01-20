const { Article } = require('../models')

module.exports = (req, res, next) => {
  console.log(req.params)
  Article.findOne({ _id: req.params.id })
    .then(article => {
      console.log(article)
      console.log(article.UserId)
      console.log(req.activeUserId)
      const isOwner = article.UserId == req.activeUserId
      isOwner ? next() : res.status(401).json({ msg: 'Sorry, you\'re not authorized' })
    })
    .catch(err => res.status(500).json({ msg: err.message }))
}