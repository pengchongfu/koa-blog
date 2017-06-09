import Router from 'koa-router'
import { ArticleList, createArticle, ArticleDetail } from '../controllers/article'
import { getUser, createUser } from '../controllers/user'
import Models from '../models'

const api = new Router()

api.get('/article', async (ctx) => {
  let list = await ArticleList()
  ctx.body = list.map(item => {
    return {
      title: item.title,
      content: item.content,
      user: item.user.nickname
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
  let user = await Models.User.findOne({
    email: 'pengchongfu@gmail.com'
  })
  ctx.request.body.user = user
  let article = await createArticle(ctx.request.body)
  ctx.body = article
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