const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect(`mongodb+srv://${process.env.ATLAS}`);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("Connection Successful!");
  })
}

module.exports = { config: connect }