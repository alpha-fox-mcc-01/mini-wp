const Router = require('express').Router()

const userRoute = require('./userRoute')
const articleRoute = require('./articleRoute')

Router.use('/users', userRoute)
Router.use('/articles', articleRoute)

module.exports = Router