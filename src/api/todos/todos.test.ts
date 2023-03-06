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
      }));
});

describe('POST /api/todos', () => {
  it('responds with an error if todo is invalid', async () => 
    request(app)
      .post('/api/todos')
      .set('Accept', 'application/json')
      .send({
        content: '',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty('message');
      }));
  it('responds with an inserted object', async () => 
    request(app)
      .post('/api/todos')
      .set('Accept', 'application/json')
      .send({
        content: 'Buy Milk',
        completed: true,
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('content');
        expect(response.body).toHaveProperty('completed');
      }));
});
