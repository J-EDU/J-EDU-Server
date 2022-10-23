const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/comment/addComment')
      .send({
      fullName : "Ruba and serra the best team",
      description :"comment Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(200)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete comment ', async () => {
    const res = await request(app)
      .delete('/root/comment/deleteComment/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
  it('should be not update comment ', async () => {
    const res = await request(app)
      .put('/root/comment/updatecomment/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"comment Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
    it('should be not delete comment ', async () => {
      const res = await request(app)
        .get('/root/comment/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"comment Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(200)
    })
  });