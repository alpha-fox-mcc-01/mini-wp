module.exports = (err, req, res, next) => {
  if(err.length < 1){
    res.status(404).json({msg : 'data not found'})
  } else if(!err.n){
    res.status(404).json({msg : 'data not found'})
  } else {
    res.status(500).json({ msg : err.message })
  }
}