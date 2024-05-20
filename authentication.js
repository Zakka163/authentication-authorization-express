const { isTokenValid } = require('./jwt')

module.exports = async (req, res, next) => {
    try {

        let token = req.headers.authorization
        if (!req.headers.authorization) {
            return res.status(401).json({ error: 'Access Denied. No token provided' });
        }
        token = token.split(' ')[1]
        if (!token) {
            return res.status(400).json({ error: 'Invalid Token' });
        }
        req.data = isTokenValid({ token })
        next()
    } catch (error) {
        // next(error)
        return res.status(400).json({ error: 'Invalid Token signature' });
    }
}