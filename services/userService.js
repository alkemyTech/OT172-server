const { User } = require('../models')

const findUser = async (id) => {
  const user = await User.findByPk(id)

  return user
}

const findUsers = async () => {
  const newsList = await User.findAll({
    attributes: [
      'id',
      'firstName',
      'lastName',
      'email',
      'image',
      'roleId'
    ]
  })
  return newsList
}

const removeUser = async (id) => {
  await User.destroy({ where: { id } })
}

module.exports = {
  removeUser,
  findUser,
  findUsers
}
