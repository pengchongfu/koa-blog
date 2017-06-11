import Router from 'koa-router'
import { ArticleList, createArticle, ArticleDetail } from '../controllers/article'
import { getUser, createUser } from '../controllers/user'
import Models from '../models'

const api = new Router()

api.get('/article', async (ctx) => {
  let list = await ArticleList()
  ctx.body = list.map(item => {
    let user = item.user.nickname || '匿名用户'
    return {
      title: item.title,
      content: item.content,
      user
    }
  })
})

api.get('/article/:title', async (ctx) => {
  let detail = await ArticleDetail(ctx.params.title)
  ctx.body = {
    title: detail.title,
    content: detail.content,
    user: detail.user.nickname
  }
})

api.post('/article', async (ctx) => {
  if (ctx.session.user) {
    ctx.request.body.user = ctx.session.user
    let article = await createArticle(ctx.request.body)
    ctx.body = article
  } else {
    ctx.body = 'please login'
  }
})

api.post('/login', async (ctx) => {
  let user = await getUser(ctx.request.body)
  if (user) {
    ctx.state.user = user
    ctx.session.user = user['_id']
  }
  ctx.body = user
})

api.post('/register', async (ctx) => {
  let user
  try {
    user = await createUser(ctx.request.body)
  } catch (e) {
    console.log(e)
  }
  if (user) {
    ctx.state.user = user
    ctx.session.user = user['_id']
    ctx.body = 'sussess'
  } else {
    ctx.body = 'fail'
  }
})

export default api