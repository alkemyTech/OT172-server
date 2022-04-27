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
  }
}
