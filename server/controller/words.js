var fsp = require('../module/fs-p')
var ignoredWords = require('../module/ignored-word')

const WORD_REG = /[A-Za-z]+/ig
async function upload(ctx) {
    var filePath = ctx.request.body.files.file.path
    var file = await fsp.readFile(filePath)
    var text = file.toString().toLowerCase().replace(/\r\n/g, '')
    var sentences = text.split(/[\.\?\!\:]/)
    var data = {}

    sentences.forEach(function (sentence) {
        if (!sentence) return

        var words = sentence.match(WORD_REG)
        words.forEach(function (word) {
            if (word.length <= 2) return

            if (!data[word]) {
                data[word] = {
                    value: 10,
                    sentence: sentence
                }
            } else if (sentence.length > data[word].sentence.length) {
                data[word].sentence = sentence
            }
        })
    })

    ctx.body = data
}

async function ignore(ctx) {
    var words = JSON.parse(ctx.query.words)
    var ignored = await ignoredWords.get()

    words.forEach(function (word) {
        ignored[word] = true
    })

    ignoredWords.save(ignored)

    return 'success'
}



exports.upload = upload
exports.ignore = ignore