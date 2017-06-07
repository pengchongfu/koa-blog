import Router from 'koa-router'

import api from './api'
import home from './home'

const router = new Router()

router.use('/', home.routes())
router.use('/api', api.routes())

export default router.routes()
