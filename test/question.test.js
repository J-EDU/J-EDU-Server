const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/quiz/question/addquestion')
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
  it('should be not delete question ', async () => {
    const res = await request(app)
      .delete('/root/quiz/question/deleteQuiz/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
  it('should be not update question ', async () => {
    const res = await request(app)
      .put('/root/quiz/question/updateQuiz/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"quiz/quiz Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
    it('should be not get question ', async () => {
      const res = await request(app)
        .get('/root/quiz/question/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"quiz/quiz Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });



