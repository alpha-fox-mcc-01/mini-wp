const Article = require('../models/article')

class articleController {
    static createArticle(req, res, next) {
        console.log('masuk article controller')
        Article.create({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            published: false,
            image: req.body.image,
            userId: req.currentUserId
        })
        .then(data => {
            res.status(201).json({id: data._id})
        })
        .catch(err => {
            next(err)
        })
    }


    static getArticles(req, res, next) {
        Article.find({published: true}).populate('userId', 'username')
                .then(result => {
                    if (result.length >= 1) {
                        res.status(200).json({result : result})
                    } else {
                        res.status(200).json({result: 'No article to display'})
                     
                    }
                })
                .catch(err => {
                    next(err)
                })
    }

    static deleteArticle(req, res, next) {
        Article.findOneAndDelete({_id: req.params.id})
               .then(result => {
                   res.status(200).json({message: 'Article successfully removed'})
               })
               .catch(err => {
                   next(err)
               })
    }


    static publishArticle(req, res, next) {
        Article.findOneAndUpdate({_id : req.params.id}, {published : true})
                .then(result => {
                    res.status(200).json({message: 'Article successfully published'})
                })
                .catch(err => {
                    next(err)
                })
    }

    static editArticle(req, res, next) {
        console.log(req.file.cloudStoragePublicUrl, 'url image')
        Article.findOneAndUpdate({_id: req.params.id}, {
            image: req.file.cloudStoragePublicUrl
        })
        .then(result => {
            res.status(200).json({message: 'Article successfully updated'})
        })
        .catch(err => {
            next(err)
        })
    }

    static readOne(req, res, next) {
        Article.findOne({_id: req.params.id}).populate('userId', 'username')
               .then(result => {
                   res.status(200).json({result: result})
               })
               .catch(err => {
                   next(err)
               })

    }

    static getDrafts(req, res, next) {
        Article.find({published: false}).populate('userId', 'username')
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({result : result})
            } else {
                res.status(200).json({result: 'No article to display'})
             
            }
        })
        .catch(err => {
            next(err)
        })
    }
}



module.exports = articleController