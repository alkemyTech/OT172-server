const Joi = require('joi')

const createMemberSchema = Joi.object({
  name: Joi.string().required()
})

module.exports = {
  createMemberSchema
}
