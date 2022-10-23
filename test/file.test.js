const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/file/addFile')
      .send({
      fullName : "Ruba and serra the best team",
      description :"file Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(404)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete file ', async () => {
    const res = await request(app)
      .delete('/root/file/deleteFile/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
    it('should be not delete file ', async () => {
      const res = await request(app)
        .get('/root/file/')
        .send({
          fullName : "Ruba and serra the best team",
          description :"file Description",
          language : "Arabic",
          Thumbnail : "test"      })
      expect(res.statusCode).toEqual(404)
    })
  });