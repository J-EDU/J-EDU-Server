const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/reply/addReplay')
      .send({
      fullName : "Ruba and serra the best team",
      description :"reply Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(404)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete reply ', async () => {
    const res = await request(app)
      .delete('/root/reply/deleteReplay/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
    it('should be not get reply ', async () => {
      const res = await request(app)
        .get('/root/reply/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"reply Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(404)
    })
  });

  describe('Post Endpoints', () => {
    it('should be not update reply ', async () => {
      const res = await request(app)
        .put('/root/course/updateReply/:id')
        .send({
          fullName : "Ruba and serra the best team",
          description :"Course Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(404)
    })
  });