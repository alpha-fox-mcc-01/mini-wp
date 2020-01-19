const router = require('express').Router()
const articleController = require('../controllers/articleController')
const authenticated = require('../middlewares/authenticated')
const authorized = require('../middlewares/authorized')
const images = require('../middlewares/images')

router.post('/add', authenticated, images.multer.single('image'), 
images.sendUploadToGCS, articleController.addArticle)
router.delete('/delete/:id', authenticated, authorized,articleController.delete)
router.put('/update/:id', authenticated, articleController.update)
router.get('/myarticle', authenticated, articleController.getmyarticle)
router.get('/', articleController.getarticles)
router.get('/read/:id', articleController.readarticle)
router.get('/test', (req, res)=>{
    res.send('masuk =====+++++++=======')
    
})
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

module.exports = router