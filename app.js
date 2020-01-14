require('dotenv').config()

const mongoDBConnection = require('./configs/mongoDBconnection')
mongoDBConnection()

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const Router = require('./routes/index')
const errorsHandler = require('./middlewares/errorsHandler')

app.use('/', Router)

app.use('/', errorsHandler)
app.listen(process.env.PORT, () => {
	console.log('Server started at PORT', process.env.PORT)
})