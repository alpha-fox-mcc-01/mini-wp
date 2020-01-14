require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const router = require('./Routes')
const ErrorHandler = require('./Middlewares/errorHandler')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mini-wp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongo Connected');
  
});

 
app.use(cors())
app.use(express.urlencoded({ extended : false }))
app.use(express.json())

app.use('/', router)
app.use('/', ErrorHandler)
 

 
app.listen(PORT, function () {
  console.log(`This App Run on port : ${PORT}`)
})