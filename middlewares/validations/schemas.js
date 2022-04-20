const Joi = require('joi')

const createUserSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: ['com', 'net', 'org']
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}/))
    .required()
})

module.exports = { createUserSchema }
