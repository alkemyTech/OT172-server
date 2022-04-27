const get = require('./get')
const post = require('./post')
const put = require('./put')

module.exports = {
  '/members': {
    ...get,
    ...post
  },
  '/members/{id}': {
    ...put
  }
}
