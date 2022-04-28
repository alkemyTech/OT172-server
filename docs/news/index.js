const getAll = require('./getAll.js')
const getById = require('./getById')

module.exports = {
  '/news': {
    ...getAll
  },
  '/news/{id}': {
    ...getById
  }
}
