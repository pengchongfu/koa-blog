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

export {
  ArticleList
}
