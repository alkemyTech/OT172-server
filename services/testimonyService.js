const { Testimony } = require('../models')

module.exports = {
  async createTestimony (name, image, content) {
    const testimony = await Testimony.create({ name, image, content })

    return testimony
  }
}
