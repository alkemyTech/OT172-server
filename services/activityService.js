const { Activities } = require('../models')

module.exports = {
  async postActivity (name, image, content) {
    await Activities.create({
      name,
      image,
      content
    })
  },
  async putActivity (id, data) {
    await Activities.update(data, { where: { id } })
  },
  async findActivity (id) {
    const activity = await Activities.findByPk(id)
    return activity
  },
  async findActivities () {
    const activities = await Activities.findAll()
    return activities
  }
}
