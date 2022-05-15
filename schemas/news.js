const Joi = require('joi')

// Declared outside of a joi object to reused it
const id = Joi.number().integer()
const name = Joi.string()
const content = Joi.string()
const image = Joi.string()
const categoryId = Joi.number().integer()

const getNewByIdSchema = Joi.object(
  {
    id: id.required()
  }
)

const createNewSchema = Joi.object({
  name: name.required(),
  content: content.required(),
  image: image.optional(),
  categoryId: categoryId.required()
})

module.exports = {
  getNewByIdSchema,
  createNewSchema
}
