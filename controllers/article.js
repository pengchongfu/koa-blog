import Models from '../models'

const ArticleList = () => {
  return new Promise((resolve, reject) => {
    Models.Article.find({}, {
      _id: false,
      __v: false
    })
    .then(result => {
      resolve(result)
    })
    .catch(e => {
      reject(e.message)
    })
  })
}

const ArticleDetail = (title) => {
  return new Promise((resolve, reject) => {
    Models.Article.findOne({
      title
    }, {
      _id: false,
      __v: false
    })
    .populate('user')
    .then(result => {
      resolve(result)
    })
    .catch(e => {
      reject(e.message)
    })
  })
}

const createArticle = (options) => {
  return new Promise((resolve, reject) => {
    Models.Article.create(options)
    .then(result => {
      resolve(result)
    })
    .catch(e => {
      reject(e.message)
    })
  })
}

export {
  ArticleList,
  createArticle,
  ArticleDetail
}
