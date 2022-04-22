const { Activity } = require('../models')

module.exports = {
  async builCategory (body) {
    const activity = Activity.build(body)

    const create = activity.save()

    return create
  }
}
