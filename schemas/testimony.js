const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const image = Joi.string()
const content = Joi.string()

const testimonyParamsSchema = Joi.object({
  id
})

const testimonyPutSchema = Joi.object({
  name,
  image,
  content
})

module.exports = {
  testimonyParamsSchema,
  testimonyPutSchema
}
