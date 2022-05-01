const Joi = require('joi')

const postCreateContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
  message: Joi.string().optional()
})

module.exports = {
  postCreateContactSchema
}
