const jwt = require('jsonwebtoken');
module.exports = {
    sign(obj, secret) {
        return jwt.sign(obj, secret)
    }
}