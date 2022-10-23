const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/quiz/quiz/addQuiz')
      .send({
      fullName : "Ruba and serra the best team",
      description :"quiz/quiz Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(500)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete announcment ', async () => {
    const res = await request(app)
      .delete('/root/quiz/quiz/deleteQuiz/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(500)
  })
});

describe('Post Endpoints', () => {
  it('should be not update quiz/quiz ', async () => {
    const res = await request(app)
      .put('/root/quiz/quiz/updateQuiz/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"quiz/quiz Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(500)
  })
});

describe('Post Endpoints', () => {
    it('should be not get quiz ', async () => {
      const res = await request(app)
        .put('/root/quiz/quiz/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"comment Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(404)
    })
  });

