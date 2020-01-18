const mongoose = require('mongoose')

module.exports = function () {
	dbOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	}
	mongoose.connect(process.env.MONGOURI, dbOptions)
	const db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
		console.log('Mongo started at', process.env.MONGOURI)
	});
}
