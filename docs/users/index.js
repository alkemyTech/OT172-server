const getAll = require('./getAll')
const login = require('./postLogin')
const register = require('./postRegister')
const put = require('./put')

module.exports = {
  '/auth/login': {
    ...login
  },
  '/auth/register': {
    ...register
  },
  '/users': {
    ...getAll
  },
  '/users/{id}': {
    ...put
  }
}
