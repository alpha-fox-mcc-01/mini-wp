const router = require('express').Router()
const articleController = require('../controllers/articleController')
const authenticated = require('../middlewares/authenticated')

router.post('/add', authenticated, articleController.addArticle)
router.delete('/delete/:id', articleController.delete)
router.put('/update/:id', articleController.update)
router.get('/myarticle', authenticated, articleController.getmyarticle)
router.get('/', articleController.getarticles)
router.get('/read/:id', articleController.readarticle)
router.get('/test', (req, res)=>{
    res.send('masuk =====+++++++=======')
    
})


module.exports = router