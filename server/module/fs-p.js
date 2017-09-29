var fs = require('fs')

exports.readFile = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.writeFile = function (path, data, option = 'utf8') {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, data, option, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}