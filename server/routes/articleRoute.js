const express = require('express')
const router = express.Router()
const { articleController } = require('../controllers')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const files = require('../middlewares/files')

router.get('/', articleController.getArticles)

router.get('/me', authentication, articleController.getUserArticles)

router.patch('/publish', authentication, authorization, articleController.publishArticle)

router.get('/drafts', authentication, articleController.showDrafts)

router.post('/', authentication, files.multer.single('file'), files.sendUploadToGCS, articleController.writeArticle)

router.put('/:id', authentication, authorization, articleController.editArticle)

router.delete('/:id', authentication, authorization, articleController.removeArticle)

router.get('/:id', articleController.getOneArticle)


module.exports = router