const { User } = require('../models')

const findUser = async (id) => {
  const user = await User.findByPk(id)

  return user
}

const findUsers = async () => {
  const newsList = await User.findAll({
    attributes: [
      'firstName',
      'lastName',
      'email',
      'image',
      'roleId'
    ]
  })
  return newsList
}

module.exports = {
  findUser,
  findUsers
}
