const ObjectId = require('mongoose').Types.ObjectId
const { Post } = require('../models')
module.exports = {
    getUserPosts(req, res, next) {
        Post.find({ _id: ObjectId(req.currentUserId)})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.log(err.message);
                next(err);
            })
    }
}