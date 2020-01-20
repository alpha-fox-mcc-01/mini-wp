const { Article } = require('../models')

module.exports = {
  addArticle(req, res) {
    const UserId = req.activeUserId
    const { title, content, published, img_url } = req.body
    Article
      .create({ title, content, published, img_url, UserId })
      .then(success => {
        res
          .status(201)
          .json({ msg: 'created', success })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: err.message })
      })
  },

  showArticle(req, res) {
    Article
      .find({})
      .then(found => {
        if (found.length >= 1) {
          res
            .status(200)
            .json(found)
        }
        else {
          res
            .status(404)
            .json({ msg: 'No data' })
        }
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: err.message })
      })
  },

  deleteArticle(req, res) {
    const id = req.params.id
    Article
      .findOne({ _id: id })
      .then(found => {
        if (found) return Article.deleteOne({ _id: id })
      })
      .then(() => {
        res
          .status(200)
          .json({ msg: 'Item deleted' })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: 'Item not found' })
      })
  },

  updateArticle(req, res) {
    const id = req.params.id
    const { title, content, published, img_url } = req.body
    Article
      .findOne({ _id: id })
      .then(found => {
        if (found) {
          return Article.updateOne({ _id: id }, { $set: { title, content, published, img_url } })
        }
      })
      .then(() => {
        res
          .status(200)
          .json({ msg: 'Item updated' })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ msg: 'Item not found' })
      })
  },
}