const { findUser, findOrCreateUser } = require('../services/authService')
const { createAccessToken } = require('../auth/jwt')
const { hashPassword, comparePassword } = require('../auth/hashPassword')

module.exports = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      console.log(`User [${email}] is trying to login`)
      const user = await findUser(email)

      if (!user) {
        console.log(`User ${email} does not exist`)
        res.status(404).json({ ok: false, msg: `No existe usuario registrado con el email ${email}` })
      } else {
        const passwordsMatch = await comparePassword(password, user.password)
        if (passwordsMatch) {
          const { password, ...sentData } = user.dataValues
          const token = createAccessToken(user.id, user.email)
          const createdUser = await findUser(email)
          const roleId = createdUser.roleId
          console.log(`User [${email}] login was successful`)
          res.status(200).json({
            ok: true,
            token,
            user: sentData,
            roleId
          })
        } else {
          console.log(`User [${email}] provided wrong credentials`)
          res
            .status(401)
            .json({ ok: false, msg: 'Contraseña incorrecta' })
        }
      }
    } catch (err) {
      console.log(`Something wrong. Error [${err.message}]`)
      res.status(500).json({ ok: false, error: err.message })
    }
  },

  async register (req, res) {
    try {
      const { firstName, lastName, email, password } = req.body

      const encryptedPassword = await hashPassword(password)
      const user = await findOrCreateUser(
        firstName,
        lastName,
        email,
        encryptedPassword
      )

      const createdUser = await findUser(email)
      const roleId = createdUser.roleId

      if (user[0]._options.isNewRecord) {
        console.log(`User ${email} successfully created`)
        const { password, ...sentData } = user[0].dataValues
        const token = createAccessToken(sentData.id, sentData.email)

        res.status(200).json({
          ok: true,
          token,
          user: sentData,
          roleId
        })
      } else {
        console.log(`${email} already in use`)
        res
          .status(400)
          .json({ ok: false, msg: `El email ${email} ya se encuentra registrado` })
      }
    } catch (error) {
      console.log(`Something wrong. Error: ${error.message}`)
      res.status(500).json({ ok: false, error: error.message })
    }
  }
}
