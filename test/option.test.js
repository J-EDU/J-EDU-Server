const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/quiz/option/addOption')
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
  it('should be not delete option ', async () => {
    const res = await request(app)
      .delete('/root/quiz/option/deleteOption/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(500)
  })
});

describe('Post Endpoints', () => {
  it('should be not update option ', async () => {
    const res = await request(app)
      .put('/root/quiz/option/updateOption/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"quiz/quiz Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(500)
  })
});

describe('Post Endpoints', () => {
    it('should be not get option ', async () => {
      const res = await request(app)
        .get('/root/quiz/option/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"quiz/quiz Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });



