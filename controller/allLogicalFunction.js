const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')




module.exports.passwordDeCrypt = function (realPassword, enCryptPassword) {
    return bcrypt.compare(realPassword, enCryptPassword)
}

module.exports.createEncryptPassword =async function (password) {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

module.exports.createToken=function({id,name,email},secureCode){
    return jwt.sign({id,email,name},secureCode)
}