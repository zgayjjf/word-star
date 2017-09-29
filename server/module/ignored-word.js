var fsp = require('./fs-p')
var path = require('path')
var words

async function getIgnoredWords() {
    if (words) {
        return words
    }

    var raw = await fsp.readFile(path.resolve(__dirname, './ignored-word.json'))

    console.log(raw.toString())
    words = JSON.parse(raw.toString())
    return words
}

async function saveIgnoredWords(words) {
    var wordsString = JSON.stringify(words)
    await fsp.writeFile(path.resolve(__dirname, './ignored-word.json'), wordsString)
}

exports.get = getIgnoredWords
exports.save = saveIgnoredWords