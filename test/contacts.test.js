const supertest = require('supertest')
const app = require('../app')

// Set supertest to fake api.
const api = supertest(app)

const fakeContact = {
  name: 'Test',
  email: 'test@email.com',
  phone: '1133994421',
}

const userAdmin = {
  email: 'patricio@mail.com',
  password: 'A.patricio123'
}
// GET Request News

describe('GET Request to contacts', () => {
  test('GET all contacts', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)

    await api.get('/contacts')
      .expect('Content-Type', /json/)
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
  })
})


// POST Request contacts

describe('POST Request to contacts', () => {
  test('POST entrie without token', async () => {
    await api
      .post('/contacts')
      .set('Content-Type', 'application/json')
      .send(fakeContact)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('POST entrie with invalid token', async () => {
    await api
      .post('/contacts')
      .set('x-access-token', 'testtokeninvalid123')
      .send(fakeContact)
      .expect(401, { error: 'Token is invalid' })
  })
})

