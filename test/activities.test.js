const supertest = require('supertest')
const app = require('../app')
const { Activities } = require('../models')

// Set supertest to fake api.
const api = supertest(app)

const fakeActivity = {
  name: 'activity test',
  image: 'testurl.com',
  content: 'Content info fake test'
}
const userStandard = {
  email: 'wilton@mail.com',
  password: 'A.wilton123'
}
const userAdmin = {
  email: 'patricio@mail.com',
  password: 'A.patricio123'
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
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('PUT activity with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
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
      .send(userAdmin)
    const activity = await Activities.create(fakeActivity)

    await api
      .patch(`/activities/${activity.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeActivity)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          ...fakeActivity,
          id: `${activity.dataValues.id}`
        })
      })
  })
})

// POST Request Activities

describe('POST Request to activities', () => {
  test('POST activity without token', async () => {
    await api
      .post('/activities')
      .set('Content-Type', 'application/json')
      .send(fakeActivity)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('POST activity with invalid token', async () => {
    await api
      .post('/activities')
      .set('x-access-token', 'testtokeninvalid123')
      .send(fakeActivity)
      .expect(401, { error: 'Token is invalid' })
  })
  test('POST activity with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .post('/activities')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .send(fakeActivity)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('POST activity with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    await api
      .post('/activities')
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeActivity)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          {
            created: true,
            msg: 'Activity created successfully!'
          })
      })
  })
})

// DELETE Request activities

describe('DELETE Request to activities/:id', () => {
  test('DELETE activity without token', async () => {
    await api
      .delete('/activities/1')
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('DELETE activity with invalid token', async () => {
    await api
      .delete('/activities/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('DELETE activity with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .delete('/activities/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('DELETE activity with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const activity = await Activities.create(fakeActivity)
    await api
      .delete(`/activities/${activity.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          message: 'deleted',
          id: `${activity.dataValues.id}`
        })
      })
  })
})
