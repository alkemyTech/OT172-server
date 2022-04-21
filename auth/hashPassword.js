const bcrypt = require('bcrypt')

module.exports = {
  async hashPassword (password) {
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)

    return hash
  },
  async comparePassword (password, userPassword) {
    const compare = await bcrypt.compare(password, userPassword)

    return compare
  }
}
