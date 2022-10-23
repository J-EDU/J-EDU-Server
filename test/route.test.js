const request = require('supertest')
const {app} = require('../src/app.js')

describe('Post Endpoints', () => {
  it('should be not logged in', async () => {
    const res = await request(app)
      .post('/root/user/login')
      .send({
        email: "admin2@gmail.com",
        password: 'Hasann0#05',
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/user/signup')
      .send({
        email: "admin4@gmail.com",
        password: 'Hasanna#05',
      })
    expect(res.statusCode).toEqual(401)
  })
});

describe('get Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .get('/root/user/')
      .send({
        
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('update user Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .get('/root/user/updateUser')
      .send({
        email: "admin@gmail.com",
        fullName:"fawzi"
      })
    expect(res.statusCode).toEqual(404)
  })
});