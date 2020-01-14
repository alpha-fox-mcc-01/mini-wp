const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/showUserArticle', ArticleController.showUserArticle);
router.get('/showPublishArticle', ArticleController.showUserArticle);
router.post('/addArticle', ArticleController.addArticle);
router.put('/updateArticle/:id', ArticleController.updateArticle);
router.delete('/deleteArticle/:id', ArticleController.deleteArticle);

module.exports = router;