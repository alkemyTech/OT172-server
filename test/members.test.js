const supertest = require('supertest')
const app = require('../app')
const { Members } = require('../models')

// Set supertest to fake api.
const api = supertest(app)

const fakeMember = {
  name: 'member test',
  image: 'testurl.com',
  description: 'Description info fake test'
}
const userStandard = {
  email: 'wilton@mail.com',
  password: 'A.wilton123'
}
const userAdmin = {
  email: 'patricio@mail.com',
  password: 'A.patricio123'
}
// GET Request Members

describe('GET Request to members', () => {
  test('GET all members', async () => {
    await api.get('/members')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('GET one member', async () => {
    const member = await Members.create(fakeMember)
    await api
      .get(`/members/${member.dataValues.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('GET an member that doesnt exist', async () => {
    await api.get('/members/0').expect(404)
  })
})

// PUT Request Members

describe('PUT Request to members/:id', () => {
  test('PUT member without token', async () => {
    await api
      .patch('/members/1')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('PUT member with invalid token', async () => {
    await api
      .patch('/members/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('PUT member with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .patch('/members/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect(403, { error: 'Admin role required' })
  })
  test('PUT member with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const member = await Members.create(fakeMember)

    await api
      .patch(`/members/${member.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeMember)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          ...fakeMember,
          id: `${member.dataValues.id}`
        })
      })
  })
})

// POST Request Members

describe('POST Request to members', () => {
  test('POST member without token', async () => {
    await api
      .post('/members')
      .set('Content-Type', 'application/json')
      .send(fakeMember)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('POST member with invalid token', async () => {
    await api
      .post('/members')
      .set('x-access-token', 'testtokeninvalid123')
      .send(fakeMember)
      .expect(401, { error: 'Token is invalid' })
  })
  test('POST member with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .post('/members')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .send(fakeMember)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('POST member with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    await api
      .post('/members')
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeMember)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          {
            ok: true,
            member: {
              ...fakeMember,
              id: expect.any(Number),
              createdAt: expect.any(String),
              updatedAt: expect.any(String)
            }
          })
      })
  })
})

// DELETE Request members

describe('DELETE Request to members/:id', () => {
  test('DELETE member without token', async () => {
    await api
      .delete('/members/1')
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('DELETE member with invalid token', async () => {
    await api
      .delete('/members/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('DELETE member with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .delete('/members/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('DELETE member with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const member = await Members.create(fakeMember)
    await api
      .delete(`/members/${member.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          message: 'deleted',
          id: `${member.dataValues.id}`
        })
      })
  })
})
