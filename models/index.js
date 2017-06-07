import mongoose from 'mongoose'
import Article from './article'
import User from './user'
mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/koa-blog', err => {
  if (err) {
    console.log(`connet mongodb err: ${err.message}`)
    process.exit(1)
  }
})

export default {
  Article,
  User
}
