const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const cors = require('koa-cors')
    // const router = new Router()
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
    // const routes = require('./routes')
const router = require('./routes')

const port = process.env.PORT || config.port

const corsOptions = {
    'content-type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'true'
}

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
    .use(json())
    .use(logger())
    .use(require('koa-static')(path.join(__dirname, '/public')))
    // .use(cors(corsOptions))
    .use(router.routes())
    .use(router.allowedMethods())

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - $ms hhhh`)
})

// router.get('/', async (ctx, next) => {
//   // ctx.body = 'Hello World'
//   ctx.state = {
//     title: 'Koa2 哈哈哈哈'
//   }
//   await ctx.render('index', ctx.state)
// })

// routes(router)
app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`)
})
