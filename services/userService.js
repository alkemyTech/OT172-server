const { User } = require('../models')

module.exports = {
  async findUser (id) {
    const user = await User.findByPk(id)

    return user
  }
}
