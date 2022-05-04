const { findUser, findUsers, removeUser } = require('../services/userService')
const { createAccessToken } = require('../auth/jwt')

const updateUser = async (req, res) => {
  try {
    const user = await findUser(req.params.id)

    if (user) {
      Object.entries(req.body).forEach(item => {
        const [key, value] = item
        // user only update these fields
        if (['firstName', 'lastName', 'email', 'image'].includes(key)) {
          user[key] = value
        }
      })

      if (req.user?.roleId === 1 && req.body.roleId) {
        user.roleId = req.body.roleId // user admin an d self only can edit role.
      }

      await user.save()
      const { password, ...sentValues } = user.dataValues

      // Create Token
      const token = createAccessToken({
        userId: sentValues.id,
        email: sentValues.email
      })
      console.log(`User [${sentValues.email}] token was reset successful`)
      res.status(200).json({
        ok: true,
        token,
        user: sentValues
      })
    } else {
      res.status(404).json({ ok: false, msg: 'User not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const usersList = await findUsers()
    res.status(200).json(usersList)
  } catch (err) {
    next(err)
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await findUser(req.params.id)

    if (user) {
      const { password, ...sentValues } = user.dataValues

      res.status(200).json({
        ok: true,
        user: sentValues
      })
    } else {
      res.status(404).json({ ok: false, msg: 'User not found' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteUser = async (req, res) => {
  const id = req.params.id
  try {
    await removeUser(id)
    res.status(200).send({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById
}
