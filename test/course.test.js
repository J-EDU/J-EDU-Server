const request = require('supertest')
const {app} = require('../src/app.js')


describe('Post Endpoints', () => {
  it('should be not signd up', async () => {
    const res = await request(app)
      .post('/root/course/addCourse')
      .send({
      fullName : "Ruba and serra the best team",
      description :"Course Description",
      language : "Arabic",
      Thumbnail : "test"
      })
    expect(res.statusCode).toEqual(200)
  })
});


describe('Post Endpoints', () => {
  it('should be not delete course ', async () => {
    const res = await request(app)
      .delete('/root/course/deletecourse/:id')
      .send({
      id: 456464646
      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
  it('should be not update course ', async () => {
    const res = await request(app)
      .put('/root/course/updateCourse/:id')
      .send({
        fullName : "Ruba and serra the best team",
        description :"Course Description",
        language : "Arabic",
        Thumbnail : "test"      })
    expect(res.statusCode).toEqual(200)
  })
});

describe('Post Endpoints', () => {
  it('should be not delete course ', async () => {
    const res = await request(app)
      .get('/root/course/search')
      .send({
        
      })
    expect(res.statusCode).toEqual(200)
  })
});

