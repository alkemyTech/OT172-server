const Joi = require('joi')

module.exports = {
  createUserSchema: Joi.object({
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
  }),
  loginUserSchema: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  }),
  createCategorySchema: Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(50)
      .required(),
    description: Joi.string().max(152)
  })
}
