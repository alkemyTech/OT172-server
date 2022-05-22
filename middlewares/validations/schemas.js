const Joi = require('joi')
const { findCategory } = require('../../services/categoriesService')
const { findNewByCategory } = require('../../services/entriesService')

const createUserSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: ['com', 'net', 'org']
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}/))
    .required()
})

const createCategorySchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required(),
  description: Joi.string().max(152)
})

const createNewsSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
  content: Joi.string()
    .alphanum()
    .min(5)
    .required(),
  image: Joi.optional(),
  type: 'news',
  categoryId: Joi.number().integer()
})

const validateExistenceCategory = async (req, res, next) => {
  const { id } = req.params
  if (await findCategory(id) != null) {
    next()
  } else {
    res.status(404).send({ message: 'The requested resource was not found.' })
  }
}

const validateCategoryInUse = async (req, res, next) => {
  const { id } = req.params
  const temp = await findNewByCategory(id)
  if (temp === null) {
    next()
  } else {
    res.status(404).send({ message: 'The category is used in DB.' })
  }
}

module.exports = { createUserSchema, createCategorySchema, createNewsSchema, validateExistenceCategory, validateCategoryInUse }
