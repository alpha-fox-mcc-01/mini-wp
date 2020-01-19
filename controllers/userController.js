const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = class UserController {
	static signin(req, res, next) {
		const email = req.body.email
		const password = req.body.password

		User.findOne({
			email
		})
			.then(result => {
				if (result) {
					const loggedOn = bcrypt.compareSync(password, result.password)
					if (loggedOn) {
						const payload = {
							_id: result._id
						}
						const access_token = jwt.sign(payload, process.env.JWT_PRIVATEKEY)
						res.status(200).json({ access_token })
					} else {
						next({
							code: 403,
							errmsg: 'Username and Password does not match'
						})
					}
				} else {
					next({
						code: 403,
						errmsg: 'Username and Password does not match'
					})
				}
			})
			.catch(err => {
				next(err)
			})
	}

	static signup(req, res, next) {
		const values = {
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
		}

		User.create(values)
			.then(createdUser => {
				res.status(201).json(createdUser)
			})
			.catch(err => {
				next(err)
			})
	}

	static googleAuth(req, res, next) {
		let access_token
		User.findOne({ email: req.body.email })
			.then(result => {
				if (result) {
					access_token = jwt.sign({ _id: result._id }, process.env.JWT_PRIVATEKEY)
					return User.updateOne({ _id: result._id }, {
						googleAuth: true
					})
				} else {
					return User.create({
						name: req.body.name,
						password: Math.random(),
						email: req.body.email
					}).then(user => {
						access_token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATEKEY)
						res.status(201).json(access_token)
					}).catch(err => {
						res.status(500).json(err)
					})
				}
			})
			.then(result => {
				console.log(result)
				res.status(200).json(access_token)
			})
			.catch(err => {
				res.status(500).json(err)
			})
	}

	static verifyToken(req, res, next) {
		console.log('verifying access token');

		const access_token = req.body.access_token
		try {
			let decoded = jwt.verify(access_token, process.env.JWT_PRIVATEKEY)
			User
				.findOne({ _id: decoded._id }, [ '_id', 'name' ])
				.then(result => {
					res.status(200).json(result)
				})
				.catch(err => {
					console.log(err);

					next(err)
				})
		} catch (error) {

		}
	}
}