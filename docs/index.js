
const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const tags = require('./tags')
const users = require('./users')
const members = require('./members')
const news = require('./news')

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  paths: {
    ...users,
    ...members,
    ...news
  }
}
