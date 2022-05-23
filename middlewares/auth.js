require('dotenv').config()
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const { User } = require('../models')

const TOKEN_SECRET = process.env.TOKEN_SECRET

const authValidation = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
})

const validateToken = async (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(403).send({ error: 'Token is missing' })

  try {
    const decodeToken = jwt.verify(token, TOKEN_SECRET)
    const user = await User.findOne({ where: { id: decodeToken.id } })

    const { password, ...sentValues } = user.dataValues

    req.user = sentValues
    next()
  } catch (error) {
    res.status(401).send({ error: 'Token is invalid' })
  }
}

const validateLogin = (req, res, next) => {
  const result = authValidation.validate(req.body)
  if (!result.error) {
    next()
  } else {
    console.log(`Authentication have errors: [${result.error.message}]`)
    res.status(422).json(result.error.message)
  }
}

const validateData = schema => {
  return (req, res, next) => {
    const validation = schema.validate(req.body)
    validation.error
      ? (console.log(`Autentication have errors: ${validation.error.message}`),
        res.status(401).send(validation.error.message))
      : (console.log('Successful data authentication'), next())
  }
}

module.exports = {
  validateToken,
  validateLogin,
  validateData
}
