require('dotenv').config
const jwt = require('jsonwebtoken')
const Joi = require('joi')

const { createUserSchema } = require('./schemas')
const TOKEN_SECRET = process.env.TOKEN_SECRET

const authValidation = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
})

const validateToken = (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) res.status(403).send('Token is missing')

  try {
    jwt.verify(token, TOKEN_SECRET)
    next()
  } catch (error) {
    res.status(401).send('Token is invalid')
  }
}

const validateRegister = (req, res, next) => {
  const validation = createUserSchema.validate(req.body)

  if (validation.error) {
    console.log(`Authentication have errors: [${validation.error.message}]`)
    res.status(401).send(validation.error.message)
  } else {
    console.log('Successful data authentication')
    next()
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

module.exports = { validateToken, validateRegister, validateLogin }
