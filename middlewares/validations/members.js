const Joi = require('joi')
const { findMember } = require('../../services/membersService')

const createMemberSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.optional(),
  description: Joi.string().required()
})

const updateMemberSchema = Joi.object({
  name: Joi.string(),
  image: Joi.optional(),
  description: Joi.string().required()
})

const validateExistenceMember = async (req, res, next) => {
  const { id } = req.params
  const member = await findMember(id)
  console.log(id, member)
  if (member != null) {
    req.body.image = member.image
    next()
  } else {
    res.status(404).send({ message: 'The requested resource was not found.' })
  }
}

module.exports = {
  createMemberSchema,
  updateMemberSchema,
  validateExistenceMember
}
