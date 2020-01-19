module.exports = (err, req, res, next) => {
   if (err.length < 1) {
      console.log(err);
      res.status(404).json({msg : `data not found`})
   }
   else if (!err.n) {
      res.status(404).json({msg : `data not found`})
   }
   else {
      console.log(err);
      res.status(500).json({msg : err.message})
   }
}