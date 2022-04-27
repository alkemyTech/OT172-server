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
  '/users/{id}': {
    ...put
  }
}
