import Router from 'koa-router'

const home = new Router()

home.get('/', async (ctx) => {
  ctx.body = 'home'
})

home.get('404', async (ctx) => {
  ctx.body = '404'
})

export default home
