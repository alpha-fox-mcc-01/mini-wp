const Article = require ('../models/articleModel')

module.exports = (req, res, next) => {
   console.log(`masuk authorization`);
   
   Article.findOne({_id : req.params.id})
      .then(data => { 
         console.log(data, `ini data`);
         
         console.log(data.userId[0], `ini userId article`);
         console.log(req.currentUserId, `ini userId`);
            
         if (data) {
            console.log(`ada datanya nich`);
            
            if (data.userId[0] == req.currentUserId) {
               
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