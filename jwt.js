const jsonwebtoken = require('jsonwebtoken')
const { jwtSecret, jwtExpiration } = require('./config')


const createTokenJWT = ({ payload }) => {
    const token = jsonwebtoken.sign(payload, jwtSecret, {
        expiresIn: jwtExpiration
    })

    return token;
}

const isTokenValid = ({ token }) => {
    return jsonwebtoken.verify(token, jwtSecret)
}


module.exports = { createTokenJWT, isTokenValid }