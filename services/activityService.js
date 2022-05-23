const { Activities } = require('../models')

module.exports = {
  async postActivity (newActivity) {
    await Activities.create(newActivity)
  },
  async putActivity (id, data) {
    await Activities.update(data, { where: { id } })
  },
  async findActivity (id) {
    const activity = await Activities.findByPk(id)
    return activity
  },
  async findActivities () {
    const activities = await Activities.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    })
    if (!activities) return null
    return activities
  },
  async removeActivity (id) {
    await Activities.destroy({ where: { id } })
  }
}
