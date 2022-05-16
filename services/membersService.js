const createError = require('http-errors')
const { Members } = require('../models')

module.exports = {
  async getAllMembers () {
    const members = await Members.findAll()
    return members
  },
  async createMember (newMember) {
    const member = await Members.create(newMember)
    return member
  },
  async putMember (id, { name }) {
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
  },
  async removeMember (id) {
    await Members.destroy({ where: { id } })
  },
  async findMember (id) {
    const member = await Members.findByPk(id)
    return member
  }
}
