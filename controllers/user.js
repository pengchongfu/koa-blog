import Models from '../models'

const createUser = (params) => {
  return new Promise((resolve, reject) => {
    Models.User.create(params)
    .then(result => {
      resolve(result)
    })
    .catch(e => {
      reject(e.message)
    })
  })
}

export {
  createUser
}
