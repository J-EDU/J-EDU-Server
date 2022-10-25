const request = require('supertest');

const {app} = require('../src/app');

describe('/root/', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'hello ',
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


