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
  }
}
