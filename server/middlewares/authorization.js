const Article = require ('../models/articleModel')

module.exports = (req, res, next) => {
   Article.findOne({_id : req.params.id})
      .then(data => {
         if (data) {
            if (data.userId == req.currentUserId) {
               next ()
            }
            else {
               res.status(401).json({msg : `you're not allowed to make this request`})
            }
         }
         else {
            res.status(404).json({msg : `data not found`})
         }
      })
      .catch (err => {
         res.status(500).json(err.message)
      })
}