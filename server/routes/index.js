const express = require('express')
const router = express.Router()

const userRoute = require('./userRoute')
const articleRoute = require('./articleRoute')

router.use('/users', userRoute);
router.use('/articles', articleRoute);
module.exports = router