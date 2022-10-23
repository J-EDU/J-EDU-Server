const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/video/addVideo')
      .send({
      fullName : "Ruba and serra the best team",
      description :"video Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(200)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete video ', async () => {
    const res = await request(app)
      .delete('/root/video/deleteVideo/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(500)
  })
});

describe('Post Endpoints', () => {
    it('should be not delete video ', async () => {
      const res = await request(app)
        .get('/root/video/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"video Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });