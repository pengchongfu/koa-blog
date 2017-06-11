import supertest from 'supertest'
import chai from 'chai'
import app from '../index'

const request = supertest(app.listen())

describe('登录权限测试', () => {
  it('post article', (done) => {
    request.post('/api/article', {})
    .end((err, res) => {
      chai.expect(res.text).to.equal('please login')
      done()
    })
  })
})

