var Koa = require('koa')
var router = require('./router/index')
var config = require('config')
var app = new Koa()

app.use(router.routes())
app.listen(config.get('port'), function () {
    console.log(`running on port ${config.port}, 2`)
})