const { User } = require('../models')

module.exports = {
  async findUser (email) {
    const user = User.findOne({ where: { email } })
    return user
  },
  async findOrCreateUser (firstName, lastName, email, password) {
    const roleId = 2
    const user = User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        email,
        password,
        roleId
      }
    })
    return user
  }
}
