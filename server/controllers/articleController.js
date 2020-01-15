const ObjectID = require('mongoose').Types.ObjectId
const { Article } = require('../models')
module.exports = {
    getArticles(req, res, next) {
        if (!req.query.keyword) {
            Article.find({published: true}).sort({'createdAt': -1}).limit(10)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.log(err.message);
                next(err);
            })
        } else {
            Article.find({title: {$regex: req.query.keyword, $options: 'i'}})
                .then(data => {
                    res.status(200).json(data)
                })
                .catch(err => {
                    console.log(err.message);
                    next(err);
                })
        }
    },
    getUserArticles(req, res, next) {
        Article.find({authorId: ObjectID(req.currentUserId)})
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    }

}