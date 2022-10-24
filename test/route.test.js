const request = require('supertest');

const app = require('../src/app');

describe('/root/user/', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'User Home',
      }, done);
  });
});

describe('GET /root/user/getusers', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/user/getusers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Get All users',
      }, done);
  });
});


