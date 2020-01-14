const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const articleRouter = require('./article');


router.use('/user', userRouter);
router.use('/article', articleRouter);
router.get('*', (req, res) => {
  res.status(404).json({
    msg: 'Not found'
  })
})



module.exports = router;