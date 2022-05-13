const Joi = require('joi')
const { findActivity } = require('../../services/activityService')

const createActivityValidation = Joi.object({
  name: Joi.string().required(),
  image: Joi.optional(),
  content: Joi.string().required()
})

const validateActivity = (req, res, next) => {
  const result = createActivityValidation.validate(req.body)
  if (!result.error) {
    next()
  } else {
    console.log(`Activity have errors: [${result.error.message}]`)
    res.status(422).json(result.error.message)
  }
}
const validateExistenceActivity = async (req, res, next) => {
  const { id } = req.params
  const activity = await findActivity(id)
  if (activity != null) {
    req.body.image = activity.image
    next()
  } else {
    res.status(404).send({ message: 'The requested resource was not found.' })
  }
}

module.exports = { validateActivity, validateExistenceActivity }
