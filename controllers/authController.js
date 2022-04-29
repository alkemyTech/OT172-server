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
        res.status(404).json({ ok: false, msg: 'User does not exist' })
      } else {
        const passwordsMatch = await comparePassword(password, user.password)
        if (passwordsMatch) {
          const { password, ...sentData } = user.dataValues

          const token = createAccessToken(user.id, user.email)

          console.log(`User [${email}] login was successful`)
          res.status(200).json({
            ok: true,
            token,
            user: sentData
          })
        } else {
          console.log(`User [${email}] provided wrong credentials`)
          res
            .status(401)
            .json({ ok: false, msg: 'User provided wrong credentials' })
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
      const token = createAccessToken(user.id, user.email)

      if (user[0]._options.isNewRecord) {
        console.log(`User ${email} successfully created`)
        res.json({ firstName, lastName, email, encryptedPassword, token })
      } else {
        console.log(`${email} already in use`)
        res
          .status(400)
          .json({ ok: false, msg: `Email ${email} already in use` })
      }
    } catch (error) {
      console.log(`Something wrong. Error: ${error.message}`)
      res.status(500).json({ ok: false, error: error.message })
    }
  }
}
