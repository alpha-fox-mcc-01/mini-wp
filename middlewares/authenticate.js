const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.headers.access_token) {
		const access_token = req.headers.access_token
		try {
			const authenticated_id = jwt.verify(access_token, process.env.JWT_PRIVATEKEY)._id
			User.findOne({
				_id: authenticated_id
			})
				.then(result => {
					if (result) {
						req.authenticated_id = authenticated_id
						req.authenticated_name = result.name
						next()
					} else {
						next({
							code: 403
						})
					}
				})
		} catch (error) {
			next(error)
		}
	} else {
		next({
			code: 403
		})
	}
}