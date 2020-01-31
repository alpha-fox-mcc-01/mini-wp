const Article = require('../models/article');

module.exports = (req, res, next) => {
  const { id } = req.params;
  Article.findById(id)
    .then(article => {
      if(req.currentUserId == article.authorId) {
        next();
      } else {
        next({
          name: 'Bad Request',
          status: 401,
          message: 'You are not authorized to take this action'
        })
      }
    })
};