module.exports = function (err, req, res, next) {
	console.log(err)
	let code
	let response

	// error handler dilihat dari namanya

	// error yang bikin sendiri
	if (err.code == 400) {
		code = 400
		response = 'Bad Request'
	} else if (err.code == 401) {
		code = 401
		response = "Unauthorized, You are not allowed to do that"
	} if (err.code == 404) {
		code = 404
		response = `${err.resource} not found`
	} else if (err.code == 403) {
		code = 403
		response = "please login first"
	} else {
		code = 500
		response = 'Internal Server Error'
	}

	if (err.name == 'JsonWebTokenError') {
		code = 403
		response = 'Invalid Access Token'
	}


	res.status(code).json({ errmsg: response })
}