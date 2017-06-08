import Router from 'koa-router'
import { ArticleList } from '../controllers/article'

const api = new Router()

api.get('/article', async (ctx) => {
  let list = await ArticleList()
  ctx.body = list
})

export default api