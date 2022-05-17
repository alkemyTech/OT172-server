const supertest = require('supertest')
// const { app } = require('../app')
const app = require('../app')
const { Activities } = require('../models')
// Set supertest to fake api.
const api = supertest(app)

const fakeActivity = {
  name: 'activity test',
  // image: 'testurl.com',
  content: 'Content info fake test'
}
// GET Request Activities

describe('GET Request to activities', () => {
  test('GET all activities', async () => {
    await api.get('/activities')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('GET one activity', async () => {
    const activity = await Activities.create(fakeActivity)
    await api
      .get(`/activities/${activity.dataValues.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('GET an activity that doesnt exist', async () => {
    await api.get('/activities/0').expect(404)
  })
})

// PUT Request Activities

describe('PUT Request to activities/:id', () => {
  test('PUT activity without token', async () => {
    await api
      .patch('/activities/1')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('PUT activity with invalid token', async () => {
    await api
      .patch('/activities/1')
      .set('Content-Type', 'application/json')
      // .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('PUT activity with token but without admin role', async () => {
    // Get a valid session to test token
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send({
        email: 'edwin@mail.com',
        password: 'A.edwin123'
      })
    await api
      .patch('/activities/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect(403, { error: 'Admin role required' })
  })
  test('PUT activity with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send({
        email: 'patricio@mail.com',
        password: 'A.patricio123'
      })
    const activity = await Activities.create(fakeActivity)

    await api
      .patch(`/activities/${activity.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeActivity)
      // .expect('Content-Type', /json/)
      .expect(200)
      // .expect((response) => {
      //   expect(response.body).toEqual({
      //     id: expect.any(Number),
      //     name: 'activity 1 test',
      //     image: 'urltestactivity1.com',
      //     content: 'content activity 1 test',
      //     deleteAt: null,
      //     createdAt: expect.any(String),
      //     updatedAt: expect.any(String)
      //   })
      // })
  })
})
