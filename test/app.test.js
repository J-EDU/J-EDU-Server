const request = require('supertest')
const {app} = require('../src/app.js')

describe('Post Endpoints', () => {
    it('should be not signd up', async () => {
      const res = await request(app)
        .post('/root/user/signup')
        .send({
          email: "admin4@gmail.com",
          password: 'Hasannasd#05',
        })
      expect(res.statusCode).toEqual(401)
    })
  })