require('dotenv').config
const jwt = require('jsonwebtoken')
const Joi = require('joi')

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
  const Token = req.headers['x-access-token']

  if (!Token) return res.status(403).send('Token is missing')

  try {
    jwt.verify(Token, TOKEN_SECRET)
    next()
  } catch (error) {
    return res.status(401).send('Token is invalid')
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

module.exports = { validateToken, validateLogin }
