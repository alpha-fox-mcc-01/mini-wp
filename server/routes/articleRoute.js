const express = require('express')
const router = express.Router()
const { articleController } = require('../controllers')

const authentication = require('../middlewares/authentication')
router.get('/', articleController.getArticles)

router.get('/me', authentication, articleController.getUserArticles)

module.exports = router