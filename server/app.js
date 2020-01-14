require('dotenv').config()

const express = require('express')
const app = express()
var mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
mongoose.connect('mongodb://localhost/miniwp', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)
app.use('/', (err, req, res, next) => {
    if(err) {
        console.log(err) 
        res.status(500).json({message: err})
    }
})
app.listen(process.env.PORT, () => {
    console.log('app running on port', process.env.PORT)
})