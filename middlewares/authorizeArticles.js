const Article = require('../models/Article')

module.exports = function (req, res, next) {
	const authenticated_id = req.authenticated_id
	Article.findOne({
		_id: req.body.articleId
	})
		.then(result => {
			if (result) {
				if (result.author == authenticated_id) {
					next()
				} else {
					next({
						code: 401
					})
				}
			} else {
				next({
					code: 404
				})
			}
		})
		.catch(err => {
			next(err)
		})
}