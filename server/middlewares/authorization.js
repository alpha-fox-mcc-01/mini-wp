const { Article } = require('../models')
module.exports = (req, res, next) => {
    Article.findById(req.query.articleId)
        .then(data => {
            if (data.authorId === req.currentUserId) {
                next()
            } else {
                res.status(401).json({error: 'You are not authorized to view this content'})
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Internal Server Error!'})
        })
}