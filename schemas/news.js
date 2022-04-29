const Joi = require('joi')

// Declared outside of a joi object to reused it
const id = Joi.number().integer()

const getNewByIdSchema = Joi.object(
  {
    id: id.required()
  }
)

module.exports = {
  getNewByIdSchema
}
