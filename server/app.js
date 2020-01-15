require('dotenv').config()

const express = require('express');
const router = require ('./routes')
const port = process.env.PORT 
const app = express()

app.use(express.json()) //IMPORTANT INVOKE
// app.use((req, res, next) => {
//     next
// })
app.use(express.urlencoded({extended: false}))

var cors = require('cors')
app.use(cors())

const connectdb = require ('./config/db')
connectdb.mongoosedb()

app.use('/', router)

app.listen(port, () =>{
    console.log('running at ', process.env.PORT);
    
})
