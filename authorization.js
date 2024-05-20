module.exports = (...roles) => {
    return async (req, res, next) => {
        try {
            if (!roles.includes(req.data.role)) {
                return res.status(401).json({ error: 'Access Denied' })
            }
            next()
        } catch (error) {
            // next(error)
            return res.status(500).json({ error: 'Server Error' })
        }
    }
}