const Article = require('../models/article')

module.exports = function (req, res, next) {
    Article.findOne({_id: req.params.id})
           .then(data => {
               if (data) {
                   if (data.userId == req.currentUserId) {
                       next()
                   } else {
                       next({
                           statusCode: '401',
                           errmessage: 'You are unauthorized to access this page' 
                       })
                   }
               } else {
                   next({
                       statusCode: '404',
                       errmessage: 'Article not found'
                   })
               }
           })
           .catch(err => {
               next(err)
           })
}