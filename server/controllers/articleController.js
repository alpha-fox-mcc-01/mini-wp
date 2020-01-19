const ObjectID = require('mongoose').Types.ObjectId
const { Article } = require('../models')
module.exports = {
    getArticles(req, res, next) {
        if (!req.query.keyword) {
            Article.find({published: true}).sort({'createdAt': -1}).limit(10).populate('authorId', 'username')
            .then(data => {
                res.status(200).json({data});
            })
            .catch(err => {
                console.log(err.message);
                next(err);
            })
        } else {
            Article.find({published: true, title: {$regex: req.query.keyword, $options: 'i'}})
                .then(data => {
                    res.status(200).json({data})
                })
                .catch(err => {
                    console.log(err.message);
                    next(err);
                })
        }
    },
    showDrafts(req, res, next) {
        Article.find({authorId: req.currentUserId, published: false}).populate('authorId', 'username')
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    },
    getOneArticle(req, res, next) {
        Article.findById(req.params.id).populate('authorId', 'username')
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    },
    getUserArticles(req, res, next) {
        Article.find({authorId: ObjectID(req.currentUserId)}).populate('authorId', 'username')
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    writeArticle(req, res, next) {
        Article.create({
            title: req.body.title,
            content: req.body.content,
            published: false,
            authorId: ObjectID(req.currentUserId),
            featured_image: req.body.featured_image
        })
            .then(data => {
                res.status(201).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    editArticle(req, res, next) {
        Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image
        })
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    removeArticle(req, res, next) {
        Article.findByIdAndDelete(req.params.id)
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    publishArticle(req, res, next) {
        Article.findByIdAndUpdate(req.query.articleid, {
            published: true
        })
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err);
            })
    }
}