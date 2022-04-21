const { Categories } = require('../models')

module.exports = {
  async create (name, description) {
    const category = await Categories.findOrCreate({
      where: { name: name.toLowerCase() },
      defaults: { name: name.toLowerCase(), description: description || '' }
    })

    return category
  }
}
