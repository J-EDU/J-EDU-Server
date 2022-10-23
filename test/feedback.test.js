const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/feedback/addFeedback')
      .send({
      fullName : "Ruba and serra the best team",
      description :"feedback Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(200)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete feedback ', async () => {
    const res = await request(app)
      .delete('/root/feedback/deleteFeedback/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
    it('should be not delete feedback ', async () => {
      const res = await request(app)
        .get('/root/feedback/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"feedback Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });

  //updateFeedback
  describe('Post Endpoints', () => {
    it('should be not delete feedback ', async () => {
      const res = await request(app)
        .put('/root/feedback/updateFeedback/:id')
        .send({
          fullName : "Ruba and serra the best team",
          description :"feedback Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });