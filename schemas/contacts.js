const Joi = require('joi')

const postCreateContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string(),
  message: Joi.string()
})

module.exports = {
  postCreateContactSchema
}
