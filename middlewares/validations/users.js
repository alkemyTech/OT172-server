const Joi = require('joi')
const { findUser } = require('../../services/userService')

// const createUserValidation = Joi.object({
//   name: Joi.string().required(),
//   image: Joi.optional(),
// })

// const validateUser = (req, res, next) => {
//   const result = createUserValidation.validate(req.body)
//   if (!result.error) {
//     next()
//   } else {
//     console.log(`User have errors: [${result.error.message}]`)
//     res.status(422).json(result.error.message)
//   }
// }

const validateExistenceUser = async (req, res, next) => {
  const { id } = req.params
  const user = await findUser(id)
  if (user != null) {
    req.body.image = user.image
    next()
  } else {
    res.status(404).send({ message: 'The requested resource was not found.' })
  }
}

module.exports = {
  // validateUser,
  validateExistenceUser
}
