const Joi = require('joi')

const validationOrganization = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
  phone: Joi.string().required(),
  adress: Joi.string().required(),
  welcomeText: Joi.string().required(),
  urlFacebook: Joi.optional(),
  urlLinkedin: Joi.optional(),
  urlInstagram: Joi.optional()
})

const validatedOrganization = (req, res, next) => {
  const result = validationOrganization.validate(req.body)
  if (!result.error) {
    next()
  } else {
    console.log(`Creating organization have errors: [${result.error.message}]`)
    res.status(422).json(result.error.message)
  }
}

module.exports = { validatedOrganization }
