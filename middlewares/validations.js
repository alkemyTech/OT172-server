require('dotenv').config
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const TOKEN_SECRET = process.env.TOKEN_SECRET

module.exports = {
  validateToken: async (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) res.status(403).send('Token is missing')

    try {
      const decodeToken = jwt.verify(token, TOKEN_SECRET)
      const user = await User.findOne({ where: { id: decodeToken._id.userId } })

      const { password, ...sentValues } = user.dataValues

      req.user = sentValues
      next()
    } catch (error) {
      res.status(401).send('Token is invalid')
    }
  },
  validateData: schema => {
    return (req, res, next) => {
      const validation = schema.validate(req.body)

      validation.error
        ? (console.log(
            `Autentication have errors: ${validation.error.message}`
          ),
          res.status(401).send(validation.error.message))
        : (console.log('Successful data authentication'), next())
    }
  }
}
