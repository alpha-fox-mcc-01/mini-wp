const router = require('express').Router()
const articleController = require('../controllers/articleController')
const authenticated = require('../middlewares/authenticated')

router.post('/add', authenticated, articleController.addArticle)
router.delete('/delete/:id', articleController.delete)
router.put('/update/:id', articleController.update)
router.get('/myarticle', authenticated, articleController.getmyarticle)

module.exports = router