const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const images = require('../middleware/images')


router.get('/', articleController.getArticles)
router.use(authentication)
router.get('/drafts', articleController.getDrafts)
router.get('/:id', articleController.readOne)
router.post('/', articleController.createArticle)
router.delete('/:id', authorization, articleController.deleteArticle)
router.patch('/:id', authorization, articleController.publishArticle)
router.post('/upload/:id', authorization, images.multer.single('image'), 
images.sendUploadToGCS, articleController.editArticle)



module.exports = router