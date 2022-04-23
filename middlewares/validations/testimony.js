const Joi = require('joi')

const validationTestimony = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.optional()
})

const validatedTestimony = (req, res, next) => {
  const result = validationTestimony.validate(req.body)
  if (!result.error) {
    next()
  } else {
    console.log(`Creating testimony have errors: [${result.error.message}]`)
    res.status(422).json(result.error.message)
  }
}

module.exports = { validatedTestimony }
