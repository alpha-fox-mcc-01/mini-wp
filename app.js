if (process.env.NODE_ENV == 'development') {
	require('dotenv').config()
}

const cors = require('cors')
const mongoDBConnection = require('./configs/mongoDBconnection')
mongoDBConnection()

const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const Router = require('./routes/index')
const errorsHandler = require('./middlewares/errorsHandler')

app.use('/', Router)

app.use('/', errorsHandler)
app.listen(process.env.PORT, () => {
	console.log('Server started at PORT', process.env.PORT)
})