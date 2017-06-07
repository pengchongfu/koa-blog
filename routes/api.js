import Router from 'koa-router'

const api = new Router()

api.get('/article', async (ctx) => {
  ctx.body = 'article'
})

export default api