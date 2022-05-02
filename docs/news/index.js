const getAll = require('./getAll.js')
const getById = require('./getById')
const post = require('./post.js')

module.exports = {
  '/news': {
    ...getAll,
    ...post
  },
  '/news/{id}': {
    ...getById
  }
}
