const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/showUserArticle', ArticleController.showUserArticle);
router.get('/viewArticle/:id', ArticleController.viewArticle);
router.get('/showPublishArticle', ArticleController.showPublishArticle);
router.get('/showPublicArticle', ArticleController.showPublicArticle);
router.post('/addArticle', ArticleController.addArticle);
router.post('/publishArticle/:id', ArticleController.publishArticle);
router.post('/unpublishArticle/:id', ArticleController.unpublishArticle);
router.put('/updateArticle/:id', ArticleController.updateArticle);
router.delete('/deleteArticle/:id', ArticleController.deleteArticle);

module.exports = router;