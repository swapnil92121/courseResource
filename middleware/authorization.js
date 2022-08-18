const jwt = require('jsonwebtoken')


module.exports.userAuthorization = async function (req, res, next) {
    try {
        const { token } = req.headers
        const auth = await jwt.verify(token, process.env.SECURE_CODE_JWT)
        if (auth) {
            next()
        } else {
            res.status(400).json({
                status: 'not Authorization'
            })
        }

    } catch (err) {
        res.status(400).json({
            status: 'not Authorization'
        })
    }
}