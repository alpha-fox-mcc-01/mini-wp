const Article = require('../models/Article')

module.exports = class ArticleController {
	static createArticle(req, res, next) {
		let { title, article, author, categories } = req.body
		let values = {
			title, article, author
		}
		if (categories) {
			let splittedcategories = categories.split(',')
			splittedcategories = splittedcategories.map(category => category.trim())
			values.categories = splittedcategories
		}
		Article.create(values)
			.then(result => {
				res.status(201).json(result)
			})
			.catch(err => {
				next(err)
			})
	}

	static removeArticle(req, res, next) {
		Article.deleteOne({
			_id: req.body.articleId
		})
			.then(result => {
				res.status(204).json(result)
			})
			.catch(err => {
				next(err)
			})
	}

	static publish(req, res, next) {
		let published
		Article.findOne({
			_id: req.body.articleId
		})
			.then(result => {
				if (result) {
					published = result.is_published
					let updateValue = { is_published: !published }
					if (!published) {
						updateValue.published_at = Date.now()
					}
				} else {
					next({
						code: 404,
						resource: 'Article'
					})
				}

				return Article.updateOne({ _id: req.body.articleId }, updateValue)
			})
			.then(updated => {
				if (!published == false) {
					res.status(200).json({ message: 'Article Retracted' })
				} else {
					res.status(200).json({ message: 'Article Published' })
				}
			})
			.catch(error => {
				next(error)
			})
	}

	static likeArticle(req, res, next) {
		let isLiked
		Article.findOne({
			_id: req.body.articleId
		})
			.then(result => {
				if (result) {
					isLiked = result.likes.includes(req.authenticated_id)
					if (isLiked) {
						return Article.updateOne({ _id: req.body.articleId }, { $pull: { likes: req.authenticated_id } })
					} else {
						return Article.updateOne({ _id: req.body.articleId }, { $push: { likes: req.authenticated_id } })
					}
				} else {
					next({
						code: 404,
						resource: 'Article'
					})
				}
			})
			.then(liked => {
				if (liked.nModified == 1) {
					if (isLiked) {
						res.status(200).json({ message: 'Article Liked' })
					} else {
						res.status(200).json({ message: 'Article un-Liked' })
					}
				} else {
					next({
						code: 400,
					})
				}
			})
			.catch(error => {
				next(error)
			})
	}

	static commentArticle(req, res, next) {
		Article.findOne({
			_id: req.body.articleId
		})
			.then(result => {
				if (result) {
					const pushedComment = {
						userId: req.authenticated_id,
						comment: req.body.comment
					}

					return Article.updateOne({ _id: req.body.articleId }, {
						$push: {
							comments: pushedComment
						}
					})

				} else {
					next({
						code: 404,
						resource: 'Article'
					})
				}
			})
			.then(commented => {
				if (commented.nModified == 1) {
					res.status(200).json({ message: 'Article Commented' })
				} else {
					next({
						code: 400,
					})
				}
			})
			.catch(err => {
				next(err)
			})
	}
}