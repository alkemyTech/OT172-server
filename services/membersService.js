const createError = require('http-errors')
const { Members } = require('../models')

module.exports = {
  async getAllMembers () {
    const members = await Members.findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })

    return members
  },
  async createMember (newMember) {
    const member = await Members.create(newMember)
    return member
  },
  async putMember (id, { name, description, image }) {
    const member = await Members.findByPk(id)
    if (!member) throw createError(404, 'Member not found')
    await Members.update({
      name,
      description,
      image,
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
