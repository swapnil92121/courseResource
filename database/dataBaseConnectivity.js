const mongoose = require('mongoose')

module.exports.dataBaseConnectivity = function (url) {
    return mongoose.connect(url)
}