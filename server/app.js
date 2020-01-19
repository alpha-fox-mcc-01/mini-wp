require('dotenv').config()

const express = require ('express')
const app = express()
const cors = require('cors')
const errorHandler = require ('./middlewares/errorHandler')
const router = require ('./routes/index')

const mongoose = require ('mongoose')
mongoose.connect(process.env.MONGOOSE, {useNewUrlParser: true, useUnifiedTopology : true, useFindAndModify : false})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
   console.log(`Connected to mongo!`);
})

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

// ROUTE <=============================================

app.use('/', router)
app.use('/', errorHandler)

app.listen(process.env.PORT, () => console.log(`listening with love and gawl in port ${process.env.PORT}`))