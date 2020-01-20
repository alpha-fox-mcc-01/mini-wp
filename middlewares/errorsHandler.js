module.exports = function (err, req, res, next) {
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
		if (err.errmsg) {
			response = err.errmsg
		} else {
			response = "please login first"
		}
	} else if (err.code == 11000) {
		code = 409
		response = 'This Email is already Registered'
	} else {
		code = 500
		response = {
			msg: 'Internal Server Error',
			details: err
		}
	}

	if (err.name == 'JsonWebTokenError') {
		code = 403
		response = 'Invalid Access Token'
	}

	if (err._message == 'User validation failed') {
		code = 422
		let failedFields = []

		for (key in err.errors) {
			failedFields.push(err.errors[ key ].message)
		}

		response = failedFields.join(', ')
		// res.send(failedFields)
	}

	// res.status(500).json({ errmsg: response })
	res.status(code).json({ errmsg: response })
}