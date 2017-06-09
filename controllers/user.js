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

const getUser = (options, ctx) => {
  if (typeof options !== 'object') return null
  return new Promise((resolve, reject) => {
    Models.User.findOne({
      email: options.email,
      password: options.password
    })
    .then(result => {
      resolve(result)
    })
  })
}


export {
  createUser,
  getUser
}
