const Joi = require('joi')

const createMemberSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string()
})

const updateMemberSchema = Joi.object({
  name: Joi.string(),
  image: Joi.string()
})

module.exports = {
  createMemberSchema,
  updateMemberSchema
}
