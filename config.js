module.exports = {
    jwtSecret: process.env.JWT_SECRET ? process.env.JWT_SECRET : 'YEAMPLOWWW',
    jwtExpiration: process.env.JWT_EXP ? process.env.JWT_EXP : '24h'
}