const { Members } = require('../models')

module.exports = {
  async getAllMembers () {
    const members = await Members.findAll()
    return members
  }
}
