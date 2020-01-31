const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);
router.get('/showPublicArticle', ArticleController.showPublicArticle);
router.get('/showUserArticle', ArticleController.showUserArticle);
router.get('/viewArticle/:id', ArticleController.viewArticle);
router.get('/showPublishArticle', ArticleController.showPublishArticle);

router.use(authorization);
router.use('/', authentication);
router.post('/',
  images.multer.single('image'), 
  images.sendUploadToGCS, ArticleController.addArticle);
// router.post('/addArticle', ArticleController.addArticle);
router.post('/publishArticle/:id', ArticleController.publishArticle);
router.post('/unpublishArticle/:id', ArticleController.unpublishArticle);
router.put('/updateArticle/:id', ArticleController.updateArticle);
router.delete('/deleteArticle/:id', ArticleController.deleteArticle);

module.exports = router;