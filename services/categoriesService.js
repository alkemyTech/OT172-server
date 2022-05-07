const { Categories } = require('../models')

module.exports = {
  async createCategory (name, description) {
    const category = await Categories.findOrCreate({
      where: { name: name.toLowerCase() },
      defaults: { name: name.toLowerCase(), description: description || '' }
    })
    return category
  },
  async getCategories () {
    const categories = await Categories.findAll()
    return categories
  },
  async removeCategory (id) {
    await Categories.destroy({ where: { id } })
  },
  async putCategories (id, req) {
    await Categories.update(req.body, { where: { id } })
  },
  async findCategory (id) {
    const category = await Categories.findByPk(id)
    return category
  }
}
