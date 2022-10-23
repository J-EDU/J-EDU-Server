const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/report/addReport')
      .send({
      fullName : "Ruba and serra the best team",
      description :"report Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(200)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete report ', async () => {
    const res = await request(app)
      .delete('/root/report/deletereport/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
    it('should be not get report ', async () => {
      const res = await request(app)
        .get('/root/report/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"report Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });