const Joi = require('joi')
const { findOrganization } = require('../../services/organizationServices')

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

const validateExistenceOrganization = async (req, res, next) => {
  const { id } = req.params
  if (await findOrganization(id) != null) {
    next()
  } else {
    res.status(404).send({ message: 'The requested resource was not found.' })
  }
}

module.exports = { validatedOrganization, validateExistenceOrganization }
