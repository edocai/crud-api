import request from 'supertest';

import app from '../../app';

describe('GET /api/todos', () => {
  it('responds with an array of todos', (done) => {
    request(app)
      .get('/api/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [
          {
            content: 'hello',
            done: true,
          },
        ],
        done,
      );
  });
});
