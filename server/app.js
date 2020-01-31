require('dotenv').config();
require('./models/article');
require('./models/user');

const db = require('./config/db');
db();

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', router);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

