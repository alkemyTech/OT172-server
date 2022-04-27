const { Activities } = require('../models')

module.exports = {
  async postActivity (name, image, content) {
    await Activities.create({
      name,
      image,
      content
    })
  },
  async putActivity (id, req) {
    await Activities.update(req.body, { where: { id } })
  },
  async findActivity (id) {
    const activity = await Activities.findByPk(id)
    return activity
  }
}
