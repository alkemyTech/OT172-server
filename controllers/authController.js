const bcrypt = require('bcrypt');
const { User } = require('../models');
const {createAccessToken} = require('../auth/jwt')


const hashPassword = require('../auth/hashPassword')

module.exports = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      console.log(`User [${email}] is trying to login`)
      const user = await User.findOne({ where: { email: email } })

      if (!user) {
        console.log(`User ${email} does not exist`)
        res.status(404).json({ ok: false })
      } else {
        const passwordsMatch = await bcrypt.compare(password, user.password)
        if (passwordsMatch) {
          const { password, ...sentData } = user.dataValues

          // Create Token
          const token = createAccessToken({
            userId: user.id,
            email: user.email,
            name:user.lastName
          });

          console.log(`User [${email}] login was successful`)
          res.status(200).json({
            token,
            user: sentData
          })
        } else {
          console.log(`User [${email}] provided wrong credentials`)
          res.status(401).json({ ok: false })
        }
      }
    } catch (err) {
      console.log(`Something wrong. Error [${err.message}]`)
      res.status(500).json({ error: err.message })
    }
  },

  async register (req, res) {
    try {
      const { firstName, lastName, email, password } = req.body

      const encryptedPassword = await hashPassword(password)

      const user = await User.findOrCreate({
        where: { email },
        defaults: {
          firstName,
          lastName,
          email,
          password: encryptedPassword
        }
      })

      user[0]['_options'].isNewRecord
        ? (console.log(`User ${email} successfully created`),
          res.json({ message: 'Successfully created' }))
        : (console.log(`${email} already in use`),
          res.status(500).json({ error: `Email ${email} already in use` }))
    } catch (error) {
      console.log(`Something wrong. Error: ${error.message}`)
      res.status(500).json({ error: error.message })
    }
  }
}
