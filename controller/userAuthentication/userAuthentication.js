const userDataBase = require('../../database/models/userModel')
const { createEncryptPassword, passwordDeCrypt, createToken } = require('../allLogicalFunction')


module.exports.login = async function (req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                status: 'enter the detail'
            })
        }
        const responce = await userDataBase.findOne({ email })
        if (responce) {
            const Checkpassword = await passwordDeCrypt(password, responce.password)
            if (Checkpassword) {
                const token=await createToken({id:responce._id,email,name:responce.name},process.env.SECURE_CODE_JWT)
                res.status(200).json({
                    status: 'login',
                    token
                })
            } else {
                res.status(400).json({
                    status: 'enter the correct password'
                })
            }
        } else {
            res.status(400).json({
                status: 'enter the correct email'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: err
        })
    }
}


module.exports.signup = async function (req, res) {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400).json({
                status: 'enter the detail'
            })
        }
        const EncryptPassword = await createEncryptPassword(password)
        if (EncryptPassword) {
            const responce=await userDataBase.create({ name, email, password: EncryptPassword })
            const token=await createToken({id:responce._id,email,name:responce.name},process.env.SECURE_CODE_JWT)
            res.status(200).json({
                status: 'signup',
                token
            })
        }
    } catch (err) {
        res.status(400).json({
            status: err
        })
    }
}