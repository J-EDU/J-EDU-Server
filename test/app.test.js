const request = require('supertest');
const {app} = require('../src/app');

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: "hello ",
      }, done);
  });
});
