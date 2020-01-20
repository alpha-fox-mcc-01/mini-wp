const express = require('express')
const router = express.Router()

router.use('/articles', require('./articleRouter'))
router.use('/user', require('./userRouter'))

module.exports = router