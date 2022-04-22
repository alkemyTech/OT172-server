const { Members } = require('../models')

module.exports = {
  async getAllMembers () {
    const members = await Members.findAll()
    return members
  },
  async createMember (name, image) {
    const member = await Members.create({
      name,
      image,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return member
  }
}
