import request from 'supertest';

import app from '../../app';

describe('GET /api/todos', () => {
  it('responds with an array of todos', async () => 
    request(app)
      .get('/api/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(1);
      }));
});
