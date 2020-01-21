// const { article } = require('../models')
const Article = require('../models/article')

module.exports = 
    function (req, res, next){
        let pk = req.params.id
        Article.findById(pk)
        .then(res =>{
            console.log(res)
            console.log(req.currentUserId);
            
            if (req.currentUserid._id == res.author) {
                next()
            } else {
                res.status(400).json({
                    msg: `unauthorized`
                })
            }
        })
        .catch(err =>{
            res.status(400).json({
                msg: `data not found`
            })
        })
    }