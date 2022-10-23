const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/announcment/addAnnouncement')
      .send({
      fullName : "Ruba and serra the best team",
      description :"announcment Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(404)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete announcment ', async () => {
    const res = await request(app)
      .delete('/root/announcment/deleteAnnouncement/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
  it('should be not update announcment ', async () => {
    const res = await request(app)
      .put('/root/announcment/updateAnnouncement/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"announcment Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(404)
  })
});

describe('Post Endpoints', () => {
  it('should be not delete announcment ', async () => {
    const res = await request(app)
      .get('/root/announcment/search')
      .send({
        
      })
    expect(res.statusCode).toEqual(404)
  })
});

