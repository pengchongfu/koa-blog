import Router from 'koa-router'
import { ArticleList, createArticle, ArticleDetail } from '../controllers/article'
import Models from '../models'

const api = new Router()

api.get('/article', async (ctx) => {
  let list = await ArticleList()
  ctx.body = list
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

export default api