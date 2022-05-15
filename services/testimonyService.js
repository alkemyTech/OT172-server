const { Testimony } = require('../models')

module.exports = {
  async createTestimony (name, image, content) {
    const testimony = await Testimony.create({ name, image, content })

    return testimony
  },

  async findTestimony (id) {
    const testimony = await Testimony.findByPk(id)
    return testimony
  },

  async deleteTestimony (id) {
    await Testimony.destroy({ where: { id } })
  },

  async updateTestimony (id, testimonyUpdates) {
    const testimonyFound = await Testimony.findByPk(id)
    if (!testimonyFound) {
      const error = new Error('This testimony doesn\'t exist')
      error.status = 404
      throw error
    }
    const pepe = await testimonyFound.update(testimonyUpdates)
  }
}
