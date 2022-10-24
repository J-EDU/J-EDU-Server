const request = require('supertest');
const {app} = require('../src/app');

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/course')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { courses: [] }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/comment/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { commentData: [] }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/video/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { videos: [] }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/announcement/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
        files: []
    }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/quiz/quiz')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
        Quizs: []
    }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/quiz/question')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
        qustions: []
    }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/quiz/option')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
        options: []
    }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/wishList')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{
        whishList: []
    }, done);
  });
});


describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/quiz/quiz/deleteQuiz/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/quiz/quiz/updateQuiz/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/quiz/quiz/addQuiz/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});
//addCourse
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/course/addCourse')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/course/updateCourse/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/root/course/deletecourse/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deletecomment/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addcomment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .put('/root/course/updatecomment/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteVideo/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});
describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addVideo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});


describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteAnnouncement/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addAnnouncement')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteFile/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addFile')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteReplay/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addReplay')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .put('/root/course/updateReplay')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteReport/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addReport')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/root/course/addFeedback')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .delete('/root/course/deleteFeedback/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .put('/root/course/updateFeedback/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404,{ __Wrong__: 'ERROR In File : Error: Route is Not Found' }, done);
  });
});