import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import routes from './routes'
import Models from './models'
import { getUser } from './controllers/user'

import session from 'koa-session'

import path from 'path'
import log4js from 'log4js'
log4js.configure({
  appenders:
    [
      {
        "category":"resLogger",
        "type": "dateFile",
        "filename": path.join(__dirname, 'log'),
        "alwaysIncludePattern":true,
        "pattern": "-yyyy-MM-dd-hh.log"
      }
    ],
  levels:
    {
      "resLogger":"ALL"
    }
})

const resLogger = log4js.getLogger('resLogger')

class MongoStore {
  async get (sid) {
    return new Promise((resolve, reject) => {
      Models.Session.findOne({
        sid
      })
      .then(result => {
        if (result) resolve(result.val)
        resolve(null)
      })
    })
  }
  async set (sid, val) {
    Models.Session.findOneAndUpdate({
      sid
    }, {
      sid,
      val
    }, (err, result) => {
      if (!result) {
        Models.Session.create({
          sid,
          val
        })
      }
    })
  }
  async destroy (sid) {
    Models.Session.remove({
      sid
    })
  }
}


const app = new Koa()
app.keys = ['chongfu.peng']
app.use(session({
  signed: false,
  store: new MongoStore()
},app))

app.use(async (ctx, next) => {
  let user = await getUser()
  ctx.state.user = user
  resLogger.info(`${ctx.req.url}`)
  await next()
})

app.use(async (ctx, next) => {
  await next()
  let n = ctx.session.views || 0
  ctx.session.views = ++n
})

app.use(bodyParser())
app.use(routes)

app.listen(3000)

export default app
