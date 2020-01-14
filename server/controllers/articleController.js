const ObjectId = require('mongoose').Types.ObjectId
const { Article } = require('../models')
module.exports = {
    getUserArticles(req, res, next) {
        Article.find({ _id: ObjectId(req.currentUserId)})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.log(err.message);
                next(err);
            })
    }
}