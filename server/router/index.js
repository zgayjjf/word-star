var Router = require('koa-router')
var koaBody = require('koa-body')
var wordsController = require('../controller/words')

var router = new Router()

router.post('/api/words/upload', koaBody({multipart: true}), wordsController.upload)
router.get('/api/words/upload', function (ctx) {
    ctx.body = 11111
})
router.get('/test/', function (ctx) {
    ctx.body = '111111111'
})
router.get('/api/words/ignore', wordsController.ignore)

module.exports = router
