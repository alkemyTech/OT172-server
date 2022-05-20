const supertest = require('supertest')
const app = require('../app')
const { Entries } = require('../models')

// Set supertest to fake api.
const api = supertest(app)

const fakeNew = {
  name: 'New test',
  image: 'testurl.com',
  categoryId: 2,
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
// GET Request News

describe('GET Request to news', () => {
  test('GET all news', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)

    await api.get('/news')
      .expect('Content-Type', /json/)
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
  })
  test('GET one new', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)

    const entry = await Entries.create({ ...fakeNew, type: 'news' })
    await api
      .get(`/news/${entry.dataValues.id}`)
      .expect('Content-Type', /json/)
      .set('x-access-token', userLogged.body.token)
      .expect(200)
  })
  test('GET an entrie that doesnt exist', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)

    await api
      .get('/news/-1')
      .set('x-access-token', userLogged.body.token)
      .expect(404)
  })
})

// PATCH Request Entries

describe('PATCH Request to news/:id', () => {
  test('PATCH entrie without token', async () => {
    await api
      .patch('/news/1')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('PATCH entrie with invalid token', async () => {
    await api
      .patch('/news/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })

  test('PATCH entrie with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const entrie = await Entries.create({ ...fakeNew, type: 'news' })

    await api
      .patch(`/news/${entrie.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeNew)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

// POST Request news

describe('POST Request to news', () => {
  test('POST entrie without token', async () => {
    await api
      .post('/news')
      .set('Content-Type', 'application/json')
      .send(fakeNew)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('POST entrie with invalid token', async () => {
    await api
      .post('/news')
      .set('x-access-token', 'testtokeninvalid123')
      .send(fakeNew)
      .expect(401, { error: 'Token is invalid' })
  })
})

// DELETE Request news

describe('DELETE Request to news/:id', () => {
  test('DELETE entrie without token', async () => {
    await api
      .delete('/news/1')
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('DELETE entrie with invalid token', async () => {
    await api
      .delete('/news/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('DELETE entrie with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .delete('/news/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('DELETE new with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const entrie = await Entries.create({ ...fakeNew, type: 'news' })
    await api
      .delete(`/news/${entrie.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          message: 'deleted',
          id: `${entrie.dataValues.id}`
        })
      })
  })
})
