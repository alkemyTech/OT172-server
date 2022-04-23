const Joi = require('joi')

const createMemberSchema = Joi.object({
  name: Joi.string().required()
})

const updateMemberSchema = Joi.object({
  name: Joi.string()
})

module.exports = {
  createMemberSchema,
  updateMemberSchema
}
