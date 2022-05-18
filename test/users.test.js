const supertest = require('supertest')
const app = require('../app')
const { User } = require('../models')

// Set supertest to fake api.
const api = supertest(app)

const fakeUser = {
  email: 'testemail@test.com',
  image: 'urlsomeavatar.com',
  firstName: 'Primer Nombre',
  lastName: 'Primer Nombre'
}
const userStandard = {
  email: 'wilton@mail.com',
  password: 'A.wilton123'
}
const userAdmin = {
  email: 'patricio@mail.com',
  password: 'A.patricio123'
}
// GET Request Users

describe('GET Request to users', () => {
  test('GET all users without token', async () => {
    await api
      .get('/users')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('GET an users without token', async () => {
    await api
      .get('/users/1')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('GET users with invalid token', async () => {
    await api
      .get('/users')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('GET user with invalid token', async () => {
    await api
      .get('/users/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('GET user with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .get('/users/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect(403, { error: 'Admin role required' })
  })
  test('GET users with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .get('/users')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect(403, { error: 'Admin role required' })
  })
  test('GET users with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    await api
      .get('/users')
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
      // .expect((response) => {
      //   expect(response.body).toEqual({
      //     ...fakeUser,
      //     id: `${user.dataValues.id}`
      //   })
      // })
  })
  test('GET user with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const user = await User.create({ ...fakeUser, roleId: 2 })

    await api
      .get(`/users/${user.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          ok: true,
          user:
          {
            ...fakeUser,
            id: user.dataValues.id,
            roleId: expect.any(Number),
            deletedAt: null,
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
          }
        })
      })
  })
  test('GET an user that doesnt exist', async () => {
    await api.get('/users/0').expect(404)
  })
})

// PUT Request Users

describe('PUT Request to users/:id', () => {
  test('PUT user without token', async () => {
    await api
      .patch('/users/1')
      .set('Content-Type', 'application/json')
      .expect(403, { error: 'Token is missing' })
  })
  test('PUT user with invalid token', async () => {
    await api
      .patch('/users/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('PUT user with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .patch('/users/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect(403, { error: 'Admin role required' })
  })
  test('PUT user with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const user = await User.create(fakeUser)

    await api
      .patch(`/users/${user.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .send(fakeUser)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          ok: true,
          token: expect.any(String),
          user: {
            ...fakeUser,
            roleId: null,
            id: user.dataValues.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            deletedAt: null
          }
        })
      })
  })
})

// DELETE Request users

describe('DELETE Request to users/:id', () => {
  test('DELETE user without token', async () => {
    await api
      .delete('/users/1')
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Token is missing' })
  })
  test('DELETE user with invalid token', async () => {
    await api
      .delete('/users/1')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .set('x-access-token', 'testtokeninvalid123')
      .expect(401, { error: 'Token is invalid' })
  })
  test('DELETE user with token but without admin role', async () => {
    const userLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userStandard)
    await api
      .delete('/users/1')
      .set('Content-Type', 'application/json')
      .set('x-access-token', userLogged.body.token)
      .expect('Content-Type', /json/)
      .expect(403, { error: 'Admin role required' })
  })
  test('DELETE user with token and admin role', async () => {
    const adminLogged = await api
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send(userAdmin)
    const user = await User.create(fakeUser)
    await api
      .delete(`/users/${user.dataValues.id}`)
      .set('Content-Type', 'application/json')
      .set('x-access-token', adminLogged.body.token)
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual({
          message: 'User deleted'
        })
      })
  })
})
