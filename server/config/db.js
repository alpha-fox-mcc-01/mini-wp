const mongoose = require('mongoose');
require('../models/article');
require('../models/user');

module.exports = () => {
  mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Mongoose connected');
  })
}
