const login = require('./postLogin')

module.exports = {
  '/auth/login': {
    ...login
  }
}
