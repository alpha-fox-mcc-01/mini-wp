const Article = require('../models/articleModel')
// const jwt = require('jsonwebtoken')

class ArticleController {
   static getAll(req, res, next) {
      Article.find()
         .then(data => {
            console.log(data);
            res.status(200).json(data)
         })
         .catch(err => {
            next()
         })
   }

   static read(req, res, next) {
      Article.findOne({ _id: req.params.articleId }).populate('userId', 'name')
         .then(data => {
            console.log(data);
            
            res.status(200).json({data})
         })
         .catch(err => {
            next()
         })
   }

   static add(req, res, next) {
      Article.create({
         image: req.body.image,
         title: req.body.title,
         content: req.body.content,
         publish: req.body.publish,
         userId: req.currentUserId
      })
         .then(data => {
            console.log(data);
            res.status(201).json({ data })
         })
         .catch(err => {
            next()
         })
   }

   static delete(req, res, next) {
      console.log(`masuk delete`);
      
      Article.findOneAndDelete({ _id: req.params.id })
         .then(() => {
            res.status(200).json({ msg: `deleted` })
         })
         .catch(err => {
            next()
         })
   }

   static update(req, res, next) {
      console.log(`masuk update`);
      
      let newData = {
         image: req.body.image,
         title: req.body.title,
         content: req.body.content,
         publish: req.body.publish
      }

      Article.findOneAndUpdate({ _id : req.params.id }, newData)
         .then(data => {
            console.log(data);
            res.status(201).json({data, msg : `updated`})
         })
         .catch (err => {
            next()
         })
   }

   // static getMyArticles (req, res, next) {
   //    Article.find({userId : req.params.id})
   // }
}

module.exports = ArticleController