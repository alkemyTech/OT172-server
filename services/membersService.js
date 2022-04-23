const createError = require('http-errors')
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
  },
  async updateMember (id, { name }) {
    const member = await Members.findByPk(id)
    if (!member) throw createError(404, 'Member not found')
    await Members.update({
      name,
      updatedAt: new Date()
    }, {
      where: {
        id
      }
    })
  }
}
